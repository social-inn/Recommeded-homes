# Social-Inn Recommended Homes
Module for recommending similar homes on housing reservation website

## RESTful API Routes

1. [GET](#GET)
1. [POST](#POST)
1. [PUT](#PUT)
1. [DELETE](#DELETE)

## GET
**Endpoint:** `/MoreHomes/:id`

**Success Response:** List of recommended homes for id = `id` in an array of objects
- **Code:** 200
- **Content:**
```
	[
		{
		  id : 12,
		  image_url : 'https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg',
		  home_description : 'New House 1 minute from station622012',
		  house_type : 'ENTIRE HOUSE',
		  city : 'Yokohama',
		  price : '$312.00',
		  stars : 2.50,
		  num_reviews : 325
		}, ...
	]
```

**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## POST
**Endpoint:** `/MoreHomes/:id`

**Data Params:** Body should be in JSON format
```
	{
	 id: 603
	}
```
**Success Response:** Inserts new recommendation for home with id = `id`
- **Code:** 201
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## PUT
**Endpoint:** `/MoreHomes/:id`

**Data Params:** Body should be an array of ids in JSON format with updated recommendations
```
	[
		{
		  id : 25
		},
		{
		  id : 98074
		},
		{
		  id : 1334
		}
	]
```
**Success Response:** Updates the recommendations of home with id = `id`
- **Code:** 204
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## DELETE
**Endpoint:** `/MoreHomes/:id?recommendedId=` <br >
**Query Params:** recommendedId is id of home <br >
**Data Params:** Body should be in JSON format with the id of recommendation to delete
```
	{
	 id: 603
	}
```

**Success Response:** Deletes the recommendation with id = `req.query.recommendedId` for home with id = `id`
- **Code:** 204
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`
