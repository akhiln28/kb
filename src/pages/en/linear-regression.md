---
title: Page 2
description: Linear Regression
layout: ../../layouts/MainLayout.astro
---

We have the set of training data $\{(x_{1}, y_{1}), (x_{2}, y_{2}), \dots, (x_{n}, y_{n})\}$. We need to find the linear function that best fits the data.

$$
y = f(\mathbf{X}) = \mathbf{\beta^T} \cdot \mathbf{X} + \epsilon
$$

Where $\mathbf{X}$ is the input vector, $\mathbf{\beta}$ is the weight vector, $\epsilon \sim N(0, \sigma^2)$ normal distribution with mean 0 and variance $\sigma^2$. as noise.

We can find the weight vector $\mathbf{\beta}$ by minimizing the sum of squared errors.

$$
\text{RSS}(\beta) = \sum\limits_{i=1}^{n} (\beta^T \cdot x_i - y_i)^2
$$

$$
\mathbf{\beta} = \arg\min_{\mathbf{\beta}} \sum_{i=1}^{n} (y_{i} - \mathbf{\beta^T} \cdot \mathbf{X_{i}})^2
$$

The maximum likelihood estimate of $\mathbf{\beta}$ that minimizes RSS is given by

$$
\mathbf{\beta} = (\mathbf{X^T} \cdot \mathbf{X})^{-1} \cdot \mathbf{X^T} \cdot \mathbf{y}
$$
