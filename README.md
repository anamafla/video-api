# Video API 📹


A GraphQL API for information about public test videos. 

## Implementation

This GraphQL API was implemented using Apollo Server Lambda and Netlify Lambda.

## URL

A live version is available at:

https://competent-shockley-218aa5.netlify.app/graphql

## How to Use

### Queries

* video (id required)
* videos



### Writing queries

```
query {
 video(id:"1") {
  title
  description
  sources
  subtitle
  thumb
}
}
```
The above GraphQL query will produce the following JSON response:

```
{
  "data": {
    "video": {
      "title": "Big Buck Bunny",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "subtitle": "By Blender Foundation",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
    }
  }
}
```




```
query {
 videos {
  id
  title
  description
  sources
  subtitle
  thumb
}
}
```
Response:

```
{
  "data": {
    "videos": [
      {
        "id": "1",
        "title": "Big Buck Bunny",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "subtitle": "By Blender Foundation",
        "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      },
      {
        "id": "2",
        "title": "Sintel",
        "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "subtitle": "By Blender Foundation",
        "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
      },
      {
        "id": "3",
        "title": "Tears of Steel",
        "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "subtitle": "By Blender Foundation",
        "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
      },
      {
        "id": "4",
        "title": "Elephant Dream",
        "description": "The first Blender Open Movie from 2006",
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "subtitle": "By Blender Foundation",
        "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
      },
     
      //...
    ]
    
  }
}
```
