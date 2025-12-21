package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main(){
	r := gin.Default()
	
	//health check
	r.GET("/health", func(c *gin.Context){
		c.JSON(http.StatusOK, gin.H{
			"status" : "OK",
			"message" : "Gin Backend is Running",
		})
	})

	r.Run(":8080") // default localhost:8080
}