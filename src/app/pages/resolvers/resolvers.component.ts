import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/posts/post';

@Component({
  selector: 'app-resolvers',
  standalone: true,
  imports: [],
  templateUrl: './resolvers.component.html',
  styleUrl: './resolvers.component.scss',
})
export class ResolversComponent implements OnInit {
  posts: Post[] = [];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: ({ posts }) => {
        this.posts = posts;
      },
    });
  }
}
