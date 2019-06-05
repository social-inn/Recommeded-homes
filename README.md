# Social-Inn Recommended Homes
Module for recommending similar homes on housing reservation website

## RESTful API Routes

1. [GET](#GET)
1. [POST](#POST)
1. [PUT](#PUT)
1. [DELETE](#DELETE)

## GET
**Endpoint:** `/MoreHomes`

**Success Response:** recommended homes data in array format
- **Code:** 200
- **Content:**
```
	[
		{
		  id : 12,
		  img: "https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg",
		  house_type: "ENTIRE HOUSE",
		  location: "Lake Tobinvilla",
		  description: "Cozy house in friendly neighborhood",
		  cost_per_night: 6795,
		  rating: 4.1,
		  votes: 1973 
		}, ...
	]
```

**Error Response:**
- **Code:** 500
- **Content:** `'error'`
<br />

**Endpoint:** `/MoreHomes/:id`

**Success Response:** The home with param`id`in object format
- **Code:** 200
- **Content:**
```
	{
	id : 12,
	img: "https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg",
	house_type: "ENTIRE HOUSE",
	location: "Lake Tobinvilla",
	description: "Cozy house in friendly neighborhood",
	cost_per_night: 6795,
	rating: 4.1,
	votes: 1973 
	}
```
**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## POST
**Endpoint:** `/MoreHomes`

**Data Params:** Body should be in JSON format
```
	{
	img: "https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg",
	house_type: "ENTIRE HOUSE",
	location: "Lake Tobinvilla",
	description: "Cozy house in friendly neighborhood",
	cost_per_night: 6795,
	rating: 4.1,
	votes: 1973
	}
```
**Success Response:** Inserts new home in table
- **Code:** 201
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## PUT
**Endpoint:** `/MoreHomes/:id`

**Data Params:** Body should be in JSON format with updated info
```
	{
	img: "https://s3-us-west-1.amazonaws.com/homes-pic/4.jpg",
	house_type: "ENTIRE HOUSE",
	location: "Lake Tobinvilla",
	description: "Cozy house in friendly neighborhood",
	cost_per_night: 6795,
	rating: 4.1,
	votes: 1973
	}
```
**Success Response:** Updates the home with id = `id`
- **Code:** 204
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`

## DELETE
**Endpoint:** `/MoreHomes/:id`

**Success Response:** Deletes the home with id = `id`
- **Code:** 204
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`
