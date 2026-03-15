package com.wellness.service;

import com.wellness.entity.Blog;
import com.wellness.repository.BlogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    // CREATE BLOG
    public Blog createBlog(Long userId, Blog blog) {

        blog.setUserId(userId);

        return blogRepository.save(blog);
    }

    // GET ALL BLOGS
    public List<Blog> getAllBlogs() {

        return blogRepository.findAll();
    }

    // GET BLOGS BY USER
    public List<Blog> getBlogsByUser(Long userId) {

        return blogRepository.findByUserId(userId);
    }

    // DELETE BLOG
    public void deleteBlog(Long blogId) {

        blogRepository.deleteById(blogId);
    }
}