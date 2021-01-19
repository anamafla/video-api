# Video API 📹


A GraphQL API for information about public test videos. 

## Implementation

This GraphQL API was implemented using Apollo Server Lambda and Netlify Lambda.

## URL

A live version is available at:

https://video-grapqhl-api.netlify.app/graphql

## How to Use

### Queries

* sections
* video (id required)
* videos



### Writing queries

#### sections
```
query {
  sections {
    id
    name
    sort
    videos {
      id
      name
      description
      duration
      videoUrl
      thumb
      subtitle
      sort
      isCompleted
    }
  }
}
```
The above GraphQL query will produce the following JSON response:

```
 "data": {
    "sections": [
      {
        "id": "1",
        "name": "Blender",
        "sort": null,
        "videos": [
          {
            "id": "1",
            "name": "Big Buck Bunny",
            "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
            "duration": 635,
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            "subtitle": "By Blender Foundation",
            "sort": 1,
            "isCompleted": false
          },
          {
            "id": "2",
            "name": "Sintel",
            "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            "duration": 888,
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
            "subtitle": "By Blender Foundation",
            "sort": 2,
            "isCompleted": false
          },
        //...
        ]
      },
      {
        "id": "2",
        "name": "Google",
        "sort": null,
        "videos": [
          {
            "id": "5",
            "name": "For Bigger Blazes",
            "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
            "duration": 15,
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
            "subtitle": "By Google",
            "sort": 1,
            "isCompleted": false
          },
          {
            "id": "6",
            "name": "For Bigger Escape",
            "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "duration": 15,
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
            "subtitle": "By Google",
            "sort": 2,
            "isCompleted": false
          },
          //...
     
        ]
      }
    ]
  }
}




```


#### video
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


#### videos

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
