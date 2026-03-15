package com.wellness.service;

import com.wellness.entity.Article;
import com.wellness.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    // ================= CREATE =================
    public Article createArticle(Article article) {

        if(article.getTrainerName() == null){
            article.setTrainerName("Trainer");
        }

        return articleRepository.save(article);
    }

    // ================= GET ALL =================
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    // ================= CATEGORY =================
    public List<Article> getByCategory(String category) {
        return articleRepository.findByCategory(category);
    }

    // ================= DELETE =================
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }
}