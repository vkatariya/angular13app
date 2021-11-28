import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';
// import { DataTablesModule } from 'angular-datatables';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  dtOptions: DataTables.Settings = {};
 
  
  
  posts = new Array<Post>();
    
  constructor(private service:PostService) {}
    
  ngOnInit(): void {
  
      this.service.getPosts().subscribe(response => {
          this.posts = response.map(item => 
            {
              return new Post( 
                  item.body,
                  item.id,
                  item.title,
                  item.userId
              );
            });
        });
  }
}