//ROOT MODULE - company department - instructs Angular how to assemble our application.
import { NgModule }      from '@angular/core'; //general Module code from the Angular framework's core
import { BrowserModule } from '@angular/platform-browser'; // imports code necessary to run our app in the browser
import { AppComponent }   from './app.component';//actually refers to the root component we created

//Module Decorator
@NgModule({
  imports: [ BrowserModule ], //imports array under the decorator imports other pieces of our application we want included in this module.
  declarations: [ AppComponent ], //array of all components that will reside in this module
  bootstrap:    [ AppComponent ] // array of components required immediately upon launching the application
})


export class AppModule { } //standard name for the root module's class declaration.
