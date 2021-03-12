# Turing Clothing Centre Product Page

## **Overview**

This product page displays detailed information about a particular product, and allows users to view, navigate, and interact with data around that product. User functionality includes viewing and adding product questions, answers, and reviews.

## **Table of Contents**

- Description
- Installation
- Usage

**Description**

**Overview**
_High level features_

- Image Gallery
- Product Description
- Style Selector
- Add to Cart

**Questions & Answers**
_High level features_

- Questions & Answers List
- Abilitity to add both Questions & Answers
- Search Questions & Answers
- Upvote Helpful Questions & Answers

**Reviews**
_High level features_

- Reviews List (sortable, filterable, and searchable)
- Average Rating Display
- Rating Breakdown
- Product Breakdown
- Add New Review Form

**Installation**

1. Before running this app, developers will need a `config.js` file, which exports a github api key named `TOKEN`. When creating this api key, one should select all of the following scopes:

- read:org
- user
- read:user
- user:email
- user:follow

2. Run `npm install` to install all dependencies
3. Run `npm run build` to initialize webpack
4. Run `npm start` to start up the server
5. Navigate to [link](http://localhost:3000)

**Usage**
This app currently displays the product page for a single product, and the `product_id` is set at the highest level component. Should this app be integrated with a real companies' collection of products, the `product_id` would need to passed along to our `App.jsx` component as a prop.

**Team Members**
_Overview_ - Till Mattson
_Questions & Answers_ - Irene Hodge
_Ratings & Reviews_ - Austin Elwell
