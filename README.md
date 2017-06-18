# Book store

AngularJS app using directives

Directives are camel-case for 'listBooks' we tag as <list-books></list-books>

Make sure the ng-click binded functions get the correct variables. So, the controllers can do a proper job.

```html
<input type="text" class="form-control" id="genre" placeholder="Genre" ng-model="genre.name">
			
<button type="submit" class="btn btn-default" ng-click="addGenre($event, genre.name)">Add genre</button>
```