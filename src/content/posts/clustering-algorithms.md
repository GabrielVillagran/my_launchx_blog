---
title: "An introduction to clustering algorithms"
description: "How unsupervised grouping works, where it helps, and what changes when you choose an algorithm."
published: 2022-05-11
revised: 2026-09-27
category: "Machine learning"
readingMinutes: 5
---

Clustering groups data points according to a chosen notion of similarity, usually without labels telling the algorithm the correct group for each point. It can help people explore a dataset, summarize patterns, or create features for another system. The clusters are useful only when the features and similarity measure reflect the question you want to answer.

Imagine organizing songs by audio features. An algorithm may group tracks with similar measured characteristics, but it does not automatically discover meaningful genres. You still need to inspect the results and decide whether the groups serve the intended purpose.

## Several ways to form groups

**Centroid-based methods**, such as k-means, assign points around representative centers. They can be efficient for large datasets, but require a choice of cluster count and can be sensitive to initialization, scaling, and outliers.

**Density-based methods**, such as DBSCAN, find connected dense regions and can label isolated points as noise. They can discover shapes that a centroid method misses, though settings such as neighborhood size matter and varying densities can be difficult.

**Hierarchical methods** build a nested structure of groups. A dendrogram can help you inspect clusters at different levels, but the computational and memory cost depends on the specific algorithm and dataset.

**Probabilistic methods**, such as Gaussian mixture models, estimate how likely a point is to belong to each modeled component. Their usefulness depends on whether the model's assumptions fit the data.

## Choosing an approach

Start with the goal and the data, not a list of algorithm names. Ask: What does similarity mean here? Are features on comparable scales? Are outliers meaningful? Do we need a fixed number of groups? How will we evaluate whether the result is useful?

There is no single `O(n²)` cost for all clustering methods, and clustering does not inherently make every machine learning system faster. Some uses can compress or organize data for downstream tasks; others add computation. Compare methods and measure the actual result.

## The lesson from this early study

Clustering is a way to explore structure, not a substitute for understanding the domain. A technically tidy partition can still be misleading if its features, metric, or assumptions are wrong.

### Further reading

- [Google for Developers: What is clustering?](https://developers.google.com/machine-learning/clustering/overview)
- [Google for Developers: Clustering algorithms](https://developers.google.com/machine-learning/clustering/clustering-algorithms)
