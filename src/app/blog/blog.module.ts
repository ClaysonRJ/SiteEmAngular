import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { BlogsingleComponent } from './blogsingle/blogsingle.component';
import { BlogSingle2Component } from './blog-single2/blog-single2.component';
import { BlogSingle3Component } from './blog-single3/blog-single3.component';
import { BlogSingle4Component } from './blog-single4/blog-single4.component';
import { BlogSingle5Component } from './blog-single5/blog-single5.component';
import { BlogSingle6Component } from './blog-single6/blog-single6.component';
import { blogRoutingModule } from "./blog-routing.module";

@NgModule({
    declarations: [
        BlogComponent,
        BlogsingleComponent,
        BlogSingle2Component,
        BlogSingle3Component,
        BlogSingle4Component,
        BlogSingle5Component,
        BlogSingle6Component
    ],
    imports: [
        CommonModule,
        blogRoutingModule
    ],
    exports: [],
    providers: [],
    bootstrap: []
  })
  export class blogModule { }