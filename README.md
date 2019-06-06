# Social-Inn Recommended Homes
Module for recommending similar homes on housing reservation website

## RESTful API Routes

1. [GET](#GET)
1. [POST](#POST)
1. [PUT](#PUT)
1. [DELETE](#DELETE)

## GET
**Endpoint:** `/MoreHomes/:id`

**Success Response:** List of recommended homes with id = `id` in array format
- **Code:** 200
- **Content:**
```
	[
		{
		  id : 12
		},
		{
		  id : 183
		},
		{
		  id : 5783
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
**Endpoint:** `/MoreHomes/:id`
**Query Params:** recommendedId is id of recommendation home

**Success Response:** Deletes the recommendation with id = `query.id` for home with id = `id`
- **Code:** 204
- **Content:** None

**Error Response:**
- **Code:** 500
- **Content:** `'error'`
