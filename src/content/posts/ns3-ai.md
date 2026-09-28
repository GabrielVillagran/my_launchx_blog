---
title: "Exploring network simulation with ns-3 and ns3-ai"
description: "What a university project taught me about reproducible environments and connecting simulation with Python tools."
published: 2022-04-20
revised: 2026-09-27
category: "Research"
readingMinutes: 4
---

During a machine learning course, José Saúl Castillo Ipiña and I explored how to use **ns-3**, a network simulator, together with **ns3-ai**, a module that exchanges data with Python-based AI tools. Dr. Juan Carlos Cuevas Tello and Dr. Pedro David Arjona Villicaña advised the project.

Our first goal was practical: get the environment running, understand the boundary between simulation and the Python process, and document enough detail that another student could reproduce our setup. The work was exploratory; this post does not claim that we developed a new learning algorithm or validated production networking behavior.

## What each part contributes

ns-3 lets researchers model network behavior in controlled scenarios. The ns3-ai module provides a bridge between the simulator and Python-based tools, using shared memory to exchange data. That bridge can support experiments where a learning algorithm observes simulated state and supplies a decision, such as a rate-control choice.

A simulation can make repeated experiments easier, but its conclusions depend on the assumptions in the scenario. A result in a model is not automatically evidence that the same result will hold on a real network.

## The useful outcome: a reproducible setup

Installation work can seem less exciting than an algorithm, but it is a prerequisite for trustworthy experiments. We recorded our setup steps and reports in the [project repository](https://github.com/GabrielVillagran/ns3-ai). The guide reflects the versions and **Ubuntu 20.04** environment we used in 2022; check the [upstream ns3-ai project](https://github.com/hust-diangroup/ns3-ai) and current ns-3 documentation before using it with a newer system.

That project reinforced a lesson I still use: document versions, commands, assumptions, and failures while they are fresh. Reproducibility starts before the first chart or model result.

### Further reading

- [ns3-ai upstream repository](https://github.com/hust-diangroup/ns3-ai)
- [ns-3 project documentation](https://www.nsnam.org/documentation/)
