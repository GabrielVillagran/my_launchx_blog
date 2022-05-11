---
title: "Clustering Algorithms (Machine Learning)"
date: 2022-05-11T12:25:21
description: 'A quick introduction about what is clustering in ML'
---
###### Villagran Saucedo Gabriel Aldair
###### 267572
###### a267572@alumnos.uaslp.mx
- - -
# Introdution
I'm going to talk about clustering and I think that this is a very important term in computing.
Clustering will be very helpful for the ML algorithms, specially if we have to work with a big dataset, it is important to say that there are different types of clustering methods and algorithms, in this post you will find some of them, and you will get into the clustering in Machine Learning.
# What is Clustering?
first of all, what is clustering?, in simple words this kind of algorithm will help us to learn something using a lot of cases, this cases will be divided in groups and we will not only have one group, we can have so many different groups and once we have this groups we can learn something, for instance a new genre of music.
I would like to quote this example by google:
> In machine learning, we often group examples as a first step to understand a subject (data set) in a machine learning system. Grouping unlabeled examples is called clustering.
As the examples are unlabeled, clustering relies on unsupervised machine learning. If the examples are labeled, then clustering becomes classification. 

![image](https://user-images.githubusercontent.com/44887537/167773480-cb5e6c3b-fd28-42aa-b05e-9c1269ce1d5b.png)

# Why we use clustering

Clustering can be use in different areas, some of them are:
- market segmentation
- social network analysis
- search result grouping
- medical imaging
- image segmentation
- anomaly detection

for example group animals by country, group music by artist or groups documents by subject.
# Algorithms and types of clustering

There are different types of clustering, but... How we can choose the right one?.
We have to consider the size of the dataset, because if we choose a larger one the computer time will increase at the square of the number of examples "n", denotated as (O(n^2)) in simple words, this are not practical if we are using a bigger dataset.
---
### Types of clustering
- **Centroid-based clustering**
 Organizes the data into non-hierarchical clusters, k-means is the most widely-used centroid-based clustering algorithm, Centroid-based algorithms are efficient but sensitive to initial conditions and outliers.
 
![image](https://user-images.githubusercontent.com/44887537/167773552-3f439264-cc76-4c89-a9ca-fa74cc204a02.png)

 - **Density-based Clustering**
 Connects areas of high example density into clusters. This allows for arbitrary-shaped distributions as long as dense areas can be connected. These algorithms have difficulty with data of varying densities and high dimensions. Further, by design, these algorithms do not assign outliers to clusters.
 
![image](https://user-images.githubusercontent.com/44887537/167773614-bdf75aa5-19a9-48c4-822a-b1e155ebca20.png)
 
 - **Distribution-based Clustering**
 This clustering approach assumes data is composed of distributions, such as Gaussian distributions. The distribution-based algorithm clusters data into three Gaussian distributions. As distance from the distribution's center increases, the probability that a point belongs to the distribution decreases.
 
![image](https://user-images.githubusercontent.com/44887537/167773632-bd7611a0-448c-4a3c-b016-bdf0202d23dd.png)

 - **Hierarchical Clustering**
 creates a tree of clusters. Hierarchical clustering, not surprisingly, is well suited to hierarchical data, one of the advantages is that any number of clusters can be chosen by cutting the tree at the right level.
 
![image](https://user-images.githubusercontent.com/44887537/167773667-1ca4259c-c92f-43f1-a380-00fc325ea5d0.png)
 ---
### Clustering algorithms
- Density-Based Clustering
- DBSCAN (Density-Based Spatial Clustering of Applications with Noise)
- OPTICS (Ordering Points to Identify Clustering Structure)
- HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise)
- Hierarchical Clustering
- Fuzzy Clustering
- Partitioning Clustering
- PAM (Partitioning Around Medoids)
- Grid-Based Clustering
# Conclusion
Clustering will do our ML algorithms very fast, of course this will depend of the size of the dataset, the type that we have choosed and the algorithm, but not only will make a very fast work, clustering is very usful for some the actual app services, for instance we got recomendations on Netflix or Apple Music and this is thanks to the clustering algorithms.
# References
[Google Dvelopers] https://developers.google.com/machine-learning/clustering/overview?msclkid=9f58ef79d0db11eca4f802f3a019cbdd

[UpGrad] https://www.upgrad.com/blog/clustering-and-types-of-clustering-methods/?msclkid=9f5972a0d0db11eca9e8da5401b0996d
