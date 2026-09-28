---
title: "TCP and congestion control, explained"
description: "A practical study of reliable delivery, flow control, congestion windows, and loss recovery."
published: 2022-04-27
revised: 2026-09-28
category: "Networking"
readingMinutes: 9
---

When I first studied TCP, I thought of it mainly as the protocol that makes data arrive reliably. That description is useful, but it leaves out an important question: **how much data should a sender put on the network before it knows the data has arrived?** Sending too little wastes available capacity. Sending too much can overwhelm the receiver or congest the path between the two computers. This article works through both limits and explains why they must be considered separately.

TCP presents an application with an ordered **byte stream**, not a series of application messages. It numbers bytes, acknowledges received data, and retransmits data when delivery cannot be confirmed. If an application needs message boundaries, it must define them itself, for example with a length field or a delimiter. TCP provides reliability while a connection can make progress; it does not guarantee a particular latency or that an unreachable peer will eventually receive data [1].

## First, distinguish the two windows

The **receive window** (`rwnd`) is advertised by the receiver. It limits how much additional data the receiver can buffer while its application catches up. This is *flow control*: it protects one endpoint from being sent more data than it can accept [1].

The **congestion window** (`cwnd`) is maintained by the sender. It limits outstanding data according to the sender's estimate of what the network path can sustain. This is *congestion control*: it responds to evidence about the network, such as acknowledgments and packet loss [2].

As a useful first approximation, the sender's outstanding data is bounded by the smaller window [2]:

```text
data in flight <= min(rwnd, cwnd)
```

Suppose `rwnd` is 64 KiB and `cwnd` is 16 KiB. The sender cannot have more than roughly 16 KiB outstanding under these two limits. Raising the receive buffer alone will not remove that congestion-window limit. If instead `rwnd` falls to 8 KiB because the receiving application reads slowly, increasing `cwnd` will not fix the bottleneck. Real implementations also account for already outstanding bytes and other constraints, so the equation is a model of the limiting factor, not a complete sender implementation.

## How the classic congestion algorithm finds capacity

RFC 5681 defines the classic mechanisms of **slow start**, **congestion avoidance**, **fast retransmit**, and **fast recovery** [2]. They are a useful foundation even when a system uses a different congestion-control algorithm in practice.

At the start of a transmission, the sender has an initial congestion window (`IW`) and a slow-start threshold (`ssthresh`). During slow start, acknowledgments allow `cwnd` to grow rapidly; with a full window acknowledged each round-trip time, its growth is approximately exponential. The name “slow start” describes beginning from a bounded window, not a slow rate of growth. The initial window is an implementation and standards detail; assuming that every connection starts with one segment would be misleading [2].

When `cwnd` reaches `ssthresh`, congestion avoidance increases it more cautiously. The classic algorithm targets growth of about one sender maximum segment size (`SMSS`) per round-trip time for a full window of acknowledgments. This is often described as **additive increase**. Both stages rely on acknowledgment feedback; they do not directly measure an abstract quantity called “available bandwidth” [2].

Loss changes the sender's behavior. After a retransmission timeout, the classic sender cuts its congestion threshold and returns to slow start with a small congestion window. After enough duplicate acknowledgments, fast retransmit can resend a segment before the timer expires, followed by fast recovery. RFC 5681 describes distinct responses because a timeout and duplicate acknowledgments provide different evidence about how much traffic is still moving through the network [2].

## Why acknowledgments and timers both matter

An acknowledgment confirms progress in the byte stream. A series of duplicate acknowledgments may indicate that later data arrived while an earlier segment is missing, allowing **fast retransmit** after the threshold specified in RFC 5681 [2]. A retransmission timer is still necessary when acknowledgment feedback is insufficient or stops altogether.

The retransmission timeout (`RTO`) is estimated from measured round-trip times and their variation. RFC 6298 specifies the standard timer calculation, including a conservative minimum and exponential backoff after timeouts [3]. Therefore, a retransmission timer is not simply “wait one RTT and try again.” Loss can also arise from causes other than congestion, so a sender's response is a control strategy based on imperfect signals, not proof of what happened inside the network.

## A short diagnosis exercise

Imagine a file transfer that is slower than expected. I would ask these questions before changing a TCP setting:

1. **Is the receiving application keeping up?** A persistently small advertised receive window points toward the receiver or its application.
2. **Is the sender limited by congestion control?** Inspect `cwnd`, outstanding bytes, round-trip times, and retransmissions together. A single loss counter is not enough to identify the cause.
3. **Is the application actually supplying and consuming data?** Disk activity, request pacing, and application logic can limit throughput even if neither TCP window is full.
4. **What happens over time?** A snapshot may miss repeated timeouts, a changing path, or an intermittent slow reader.

My main takeaway is that TCP reliability, receiver flow control, and network congestion control solve related but different problems. Knowing which limit is active turns “TCP is slow” into a question that can be measured and tested.

### References

1. Eddy, W., ed. [RFC 9293: *Transmission Control Protocol*](https://www.rfc-editor.org/rfc/rfc9293.html). IETF, 2022.
2. Allman, M., Paxson, V., and Blanton, E. [RFC 5681: *TCP Congestion Control*](https://www.rfc-editor.org/rfc/rfc5681.html). IETF, 2009.
3. Paxson, V., Allman, M., Chu, J., and Sargent, M. [RFC 6298: *Computing TCP's Retransmission Timer*](https://www.rfc-editor.org/rfc/rfc6298.html). IETF, 2011.
