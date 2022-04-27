---
title: "TCP Protocol and congestion control"
date: 2022-04-27T12:00:21-04:00
description: 'TCP and Congestion control'
---
# ns3-ai
## Computer Networking A top-Down Approach sicth edition, Kurose and Ross
### Transport Layer
The internet's transport layer transports application-layer messages between application endpoints. There are two transport protocols
1. TCP
2. UDP

For the study case of the example I will be focus mainly on **TCP protocol**.

- **Reliable Data Transfer**: Is when the protocol provides a guranteed data delivery service

- **Loss-Tolerant Application**: When a transport layer protocol doesn't provide reliable data trasnfer, some of the data sent by the sending process may never arrive at the receiving process.

**Throughput (Rendimiento)**: is the rate at which the sending process can deliver bits to the receiving process.The available throughput can fluctuate with time due to the other sessions that shares the bandwitch.

**Time guarantee**: A transport-layer protocol also provide time guarantee, this can come in many shapes and forms, for example, every bit that is sended arrives at the receiver socket no more than 100 msec later.

### TCP
TCP Provides a connection-oriented service to its applications. This service includes guaranteed delivery of application-layer messages to the destination and flow control. TCP also breaks long messages into shorter segments and provides a congestion-control mechanism, so that a source throttles its transmission rate when the network is congested.
**Connection-Oriented Protocols**: TCP is an example of a connection-oriented protocol. It requires a logical connection to be established between the two processes before data is exchanged. The connection must be maintained during the entire time that communication is taking place, then released afterwards. **---Oracle---**

### Congestion Control
TCP has a sender limit rate which it sends traffic into its connection as a function of perceived network congestion.
If TCP perceives that there is a little congestion on the path between itself and the destination , then the TCP sender increases its send rate, if the sender perceives that there is congestion along the path, then the sender reduces it send rate.

Congestion window: The congestion window (cwnd), imposes a constraint on the rate at which a TCP sender can send traffic into the network.
**The amount of unacknowledged data at a sender may not exceed the minimum of cswn and rwnd**

## Data and Computer communications 9th Edition, William Stallings
TCP provides two useful facilities for labeling data:

1. **Data stream push**: TCP deceides when sufficient data have accumulated to form a segment for transmission.
2. **Urgent data signaling**: TCP provides a means of informing the destination TCP user that significant or "urgent" data is in the upcoming data stream. It is up to the destination user to determine appropiate action

### TCP Header Format
- **Source Port (16 bits)**: Telnet= 23, TFTP= 69 and HTTP= 80
- **Destination Port (16 bits)**: destination port number
- **Sequence Number (32 bits)**: List of numbers that are linked following a rule, TCP is identified by a sequence number. In order to reconstruct data in order, the sequence number identifies the order of the bytes sent from each computer, regardless of whether the data is delivered out of order.
**https://bostinnovation.com/what-is-sequence-numbers-in-networking/#1**
- **Acknowledgment Number (32 bits)**: Contains the sequence number of the next data octet that the TCP entity expects to receive.
If the ACK control bit is set this field contains the value of the next sequence number the sender of the segment is expecting to receive.
- **Data Offset (4 bits)**: Indicates where the data begins.  The TCP header (even one including options) is an integral number of 32 bits long.
- **Reserved (6 bits)**: Reserved for future use.  Must be zero
- **Control bits (6 bits)**:
  - URG:  Urgent Pointer field significant
  - ACK:  Acknowledgment field significant
  - PSH:  Push Function
  - RST:  Reset the connection
  - SYN:  Synchronize sequence numbers
  - FIN:  No more data from sender
**https://www.freesoft.org/CIE/Course/Section4/8.htm**
- **Window (16 bits)**: The number of data octets beginning with the one indicated in the acknowledgment field which the sender of this segment is willing to accept. 
-  **Checksum (16 bits)**:
![](@attachment/Clipboard_2022-04-12-14-39-21.png)
- **Urgent Pointer (16 bits)**: This field communicates the current value of the urgent pointer as a positive offset from the sequence number in this segment. The urgent pointer points to the sequence number of the octet following the urgent data.
- **Options (variable)**: May occupy space at the end of the TCP header and are a multiple of 8 bits in length.  All options are included in the checksum.  An option may begin on any octet boundary.
There are two cases for the format of an option:
1. A single octet of option-kind.
2. An octet of option-kind, an octet of option-length, and the actual option-data octets.

- **Padding (variable)**: The TCP header padding is used to ensure that the TCP header ends and data begins on a 32 bit boundary.  The padding is composed of zeros.

### TCP Mechanism
We can group TCP mechanism into:
- **Connection establishment**:TCP always uses a three-way handshake, a connection is uniquely determined by the spurce and destination sockets, there can only be a single TCP connection between a unique pair of ports, but a given port can support multiple connections, each with a different partner port
- **Data transfer**:Data are transferred in segments over a tranport connection, data transfer is viewed logically as consisting of a stream of octets. Each segment contains the sequence number of the first octet in the data field.
- **Connection termination**: The transport entity sets the FIN bit on the last segent that it sends out, an abrupt termination occurs if the users issues abort primitive. In this case, the entity abandons all attempts to send or receive data and discards data in its transmission and reception

### TCP congestion control
Congestion control has two main effects:
1. As congestion begins to occur, the transit time accross a network increases.
2. As congestion becomes severe, network nodes drop packets.

There are a number of techniques implemented to improve TCP congestion control, none of these techniques extends or violates the original TCP standard.
Tahoe, Reno and NewReno refer to implementation packages avaliable on many operating systems that supports TCP.
![](@attachment/Clipboard_2022-04-12-15-42-22.png)

When a new congestion is opened, TCP initializes cwnd = 1, that is TCP is only allowed to send 1 segment and then must wait for an acknowledgment before transmitting a second segment.
Each time that new data is received the value of cwnd is increased by 1.
Congestion control uses a slow-start mechanism  that probes the internet to make sure that the TCP entity is not sending too many segments into a congested environment.
