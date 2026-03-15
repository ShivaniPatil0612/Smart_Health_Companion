package com.wellness.controller;

import com.wellness.entity.Article;
import com.wellness.service.ArticleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "http://localhost:5173")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    // ================= CREATE ARTICLE (TRAINER) =================
    @PostMapping("/create")
    public Article createArticle(@RequestBody Article article) {
        return articleService.createArticle(article);
    }

    // ================= GET ALL ARTICLES (USER + ADMIN) =================
    @GetMapping("/all")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    // ================= GET BY CATEGORY =================
    @GetMapping("/category/{category}")
    public List<Article> getByCategory(@PathVariable String category) {
        return articleService.getByCategory(category);
    }

    // ================= DELETE ARTICLE (ADMIN/TRAINER) =================
    @DeleteMapping("/delete/{id}")
    public String deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return "Article deleted successfully";
    }
}