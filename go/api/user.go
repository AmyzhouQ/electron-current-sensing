package api

import (
	"net/http"

	"ee-go/eruntime"
	"ee-go/eserver"

	"github.com/gin-gonic/gin"
)

func GetName(ctx *gin.Context) {
	ret := eserver.NewJson()
	defer ctx.JSON(http.StatusOK, ret)
}

func Exit(ctx *gin.Context) {
	ret := eserver.NewJson()
	defer ctx.JSON(http.StatusOK, ret)

	eruntime.Close()
}
