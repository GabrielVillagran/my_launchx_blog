---
title: "An introduction to clustering algorithms"
description: "University-style notes on k-means, DBSCAN, hierarchical clustering, and evaluating the groups they produce."
published: 2022-05-11
revised: 2026-09-28
category: "Machine learning"
readingMinutes: 10
---

Clustering is one of the first machine learning topics that made me ask what it really means for two things to be “similar.” The task is to group observations without a known category for each one. It sounds simple until we must decide which features to compare, how to measure distance, and what counts as a useful group. These notes revisit three common approaches through their original research papers and a practical example.

Imagine a collection of songs represented by tempo, energy, and other measured audio features. We might group similar tracks to browse a catalog, but the output would not automatically correspond to genres. A cluster is the result of a **representation, a similarity rule, and an algorithm**. Interpreting it still requires knowledge of the music and the purpose of the analysis.

## Before choosing an algorithm

Write down the question the groups should help answer. Then check the data: missing values, duplicate records, unusual points, and variables measured on different scales. If tempo ranges into the hundreds while another feature ranges from zero to one, an unscaled Euclidean distance can let tempo dominate. Scaling is a modeling choice, not a guarantee of better clusters; sometimes an absolute difference in a particular feature really should matter more.

Also consider whether a distance in the chosen feature space corresponds to meaningful similarity. Two songs can have comparable numeric summaries and still sound very different. For mixed, categorical, or high-dimensional data, an off-the-shelf Euclidean metric may be a poor fit. I would inspect several example pairs before treating any cluster labels as discoveries.

## K-means: minimize within-cluster variation

K-means partitions observations into a chosen number `k` of groups. Each group has a center, or **centroid**. The method repeatedly assigns each point to a nearby centroid and updates the centroids from their assigned points. One standard formulation seeks a small sum of squared distances [1]:

```text
sum over points i of ||x_i - center_assigned_to_i||²
```

This objective explains both the appeal and the limitations. K-means is straightforward when compact groups around averages make sense, but you must choose `k`, and the answer can depend on the initial centers. Squared distance gives distant points substantial influence. The iterative procedure may settle on a local solution rather than the globally best partition. Arthur and Vassilvitskii proposed **k-means++**, a more careful way to seed centers before those iterations, to improve the quality of the initial choice [2].

For the songs, I might standardize selected features, try several values of `k`, run the model with multiple initializations, and listen to representative tracks. A low numerical objective alone would not prove that the groups help someone find music.

## DBSCAN: expand dense neighborhoods

DBSCAN takes a different view: a cluster is a connected region of sufficient density [3]. It uses a neighborhood radius, often written `eps`, and a minimum number of observations, `MinPts`, to identify **core points**. Points within reach of core points can join a cluster; points that belong to a cluster without themselves being cores are **border points**. Points left outside the dense regions are labeled **noise**.

This allows DBSCAN to find curved or irregular groups and to identify isolated observations without specifying the number of clusters in advance. The tradeoff is sensitivity to its density settings and distance measure. One global radius may join dense groups while failing to recognize sparse ones, or split sparse groups while leaving dense ones intact. “Noise” is an algorithmic label, not a judgment that a record has no value.

In the song example, DBSCAN might be useful if I expect compact regions and unusual tracks worth inspecting separately. I would compare results across plausible radii and check whether the noise points are genuinely exceptional or only artifacts of the feature scale.

## Hierarchical clustering: inspect groups at several levels

**Agglomerative** hierarchical clustering starts with individual observations and repeatedly merges groups according to a linkage rule. Ward's method chooses merges using a within-group variation criterion [4]. A **dendrogram** shows the resulting nested history, so we can inspect broad and narrow groupings before choosing where to cut it.

This is useful when the level of detail is itself an open question. But the tree is still shaped by the distance measure and linkage rule. A merge made early in an agglomerative procedure is not reconsidered later, and computing or storing pairwise relationships can become expensive as a dataset grows. I would use the dendrogram to explore structure, then examine examples from each proposed group rather than treating a branch as a definitive category.

| Method | Main decision | Useful when | Watch for |
| --- | --- | --- | --- |
| K-means | Number of groups `k` | Averages and compact groups are meaningful | Initialization, scale, outliers, non-compact shapes |
| DBSCAN | Radius `eps` and minimum neighborhood size | Dense regions and isolated points matter | Varying densities and sensitive parameter choices |
| Hierarchical, for example Ward | Distance, linkage, and cut level | Nested groupings help exploration | Early merges and cost on larger datasets |

## How can I tell whether the result is useful?

Without ground-truth labels, evaluation cannot simply count correct predictions. A **silhouette** score compares how close a point is to its own group with how close it is to its nearest alternative group [5]. It can help compare candidate partitions, but it favors particular notions of separation and should not decide the question by itself. Results can also look stable numerically while conveying little domain meaning.

I would compare multiple settings, inspect representative and borderline points, and check whether small changes in preprocessing produce radically different assignments. If I have a real downstream use, such as organizing a catalog, I would test whether the resulting groups actually improve that task. There is no universal clustering algorithm or universal runtime for the entire family of methods.

What I keep from this early study is a simple discipline: define similarity for the problem, examine what the algorithm assumes, and question whether the resulting labels help explain the data. Clustering is a way to explore structure, not an automatic source of truth.

### References

1. MacQueen, J. [“Some Methods for Classification and Analysis of Multivariate Observations.”](https://digicoll.lib.berkeley.edu/record/113015/files/math_s5_v1_article-17.pdf) *Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability*, 1967.
2. Arthur, D., and Vassilvitskii, S. [“k-means++: The Advantages of Careful Seeding.”](https://theory.stanford.edu/~sergei/papers/kMeansPP-soda.pdf) *Proceedings of SODA*, 2007.
3. Ester, M., Kriegel, H.-P., Sander, J., and Xu, X. [“A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise.”](https://cdn.aaai.org/KDD/1996/KDD96-037.pdf) *Proceedings of KDD*, 1996.
4. Ward, J. H., Jr. [“Hierarchical Grouping to Optimize an Objective Function.”](https://www.tandfonline.com/doi/abs/10.1080/01621459.1963.10500845) *Journal of the American Statistical Association*, 1963.
5. Rousseeuw, P. J. [“Silhouettes: A Graphical Aid to the Interpretation and Validation of Cluster Analysis.”](https://www.sciencedirect.com/science/article/pii/0377042787901257) *Journal of Computational and Applied Mathematics*, 1987.
