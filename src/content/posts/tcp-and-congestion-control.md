---
title: "TCP and congestion control, explained"
description: "How a TCP sender balances reliable delivery, receiver capacity, and network congestion."
published: 2022-04-27
revised: 2026-09-27
category: "Networking"
readingMinutes: 5
---

TCP provides applications with a reliable, ordered **byte stream** between endpoints. The application writes bytes; TCP divides them into segments, tracks what was acknowledged, and retransmits data when necessary. It does not preserve application message boundaries, and it cannot promise a fixed delivery time or keep a connection alive through every possible failure.

Two different limits influence how much data a sender can have in flight: **flow control** protects the receiver, while **congestion control** responds to conditions in the network.

## Flow control: what can the receiver accept?

The receiver advertises a window, commonly called `rwnd`, based on the space available in its receive buffer. If the receiver cannot accept more data yet, the sender must respect that limit. This is about the endpoint's capacity.

## Congestion control: what can the network carry?

The sender also maintains a congestion window, `cwnd`. Congestion-control algorithms adjust this window based on signals such as acknowledgments, loss, or delay. This is about avoiding excessive traffic along the path between endpoints.

The usable amount of data in flight is constrained by the smaller of these two windows, subject to other implementation details:

```text
send window ≈ min(rwnd, cwnd)
```

The distinction matters when diagnosing a slow connection. Increasing a receiver buffer will not necessarily help if the network path is congested; changing a congestion algorithm will not fix an application that is not reading from its socket.

## Why the sender probes capacity

In the classic algorithms described by RFC 5681, **slow start** grows the congestion window as acknowledgments arrive, allowing the sender to discover available capacity. Congestion avoidance grows more cautiously. When the sender detects loss, it reduces its sending rate and adapts. Exact behavior depends on the algorithm and implementation; there is no universal rule that every new TCP connection starts with exactly one segment.

## A practical takeaway

When discussing TCP performance, separate three questions: Is the receiver keeping up? Is the network path congested? Is the application producing or consuming data fast enough? TCP mechanics help answer the first two, but measurements are needed before choosing a fix.

### Further reading

- [RFC 9293: Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293.html)
- [RFC 5681: TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681.html)
