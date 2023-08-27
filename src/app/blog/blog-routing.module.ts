import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingle2Component } from './blog-single2/blog-single2.component';
import { BlogSingle3Component } from './blog-single3/blog-single3.component';
import { BlogSingle4Component } from './blog-single4/blog-single4.component';
import { BlogSingle5Component } from './blog-single5/blog-single5.component';
import { BlogSingle6Component } from './blog-single6/blog-single6.component';

import { BlogComponent } from './blog.component';
import { BlogsingleComponent } from './blogsingle/blogsingle.component';


const routes: Routes = [
  {path: '', component:BlogComponent, children: [
    
    {path: 'blog/blogsingle', component:BlogsingleComponent},
    {path: 'blog/blogsingle2', component:BlogSingle2Component},
    {path: 'blog/blogsingle3', component:BlogSingle3Component},
    {path: 'blog/blogsingle4', component:BlogSingle4Component},
    {path: 'blog/blogsingle5', component:BlogSingle5Component},
    {path: 'blog/blogsingle6', component:BlogSingle6Component},

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class blogRoutingModule {}
