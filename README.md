# Book store

AngularJS app using directives

Front-app test image:

![Front app](https://github.com/Avilardell/bookstore/blob/master/assets/front-app.jpg?raw=true "Front app test")


Directives are camel-case for 'listBooks' we tag as
```html
<list-books></list-books>
```

Make sure the ng-click binded functions get the correct variables. So, the controllers can do a proper job.

```html
<input type="text" class="form-control" id="genre" placeholder="Genre" ng-model="genre.name">
			
<button type="submit" class="btn btn-default" ng-click="addGenre($event, genre.name)">Add genre</button>
```