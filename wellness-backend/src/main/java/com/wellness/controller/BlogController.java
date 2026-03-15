package com.wellness.controller;

import com.wellness.entity.Blog;
import com.wellness.service.BlogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogController {

    @Autowired
    private BlogService blogService;

    // CREATE BLOG
    @PostMapping("/add")
    public Blog createBlog(@RequestParam Long userId,
                           @RequestBody Blog blog) {

        return blogService.createBlog(userId, blog);
    }

    // GET ALL BLOGS
    @GetMapping("/all")
    public List<Blog> getAllBlogs(){

        return blogService.getAllBlogs();
    }

    // GET BLOGS BY USER
    @GetMapping("/user/{userId}")
    public List<Blog> getBlogsByUser(@PathVariable Long userId){

        return blogService.getBlogsByUser(userId);
    }

    // DELETE BLOG
    @DeleteMapping("/delete/{id}")
    public void deleteBlog(@PathVariable Long id){

        blogService.deleteBlog(id);
    }
}