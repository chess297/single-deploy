package logic

import (
	"context"
	"math/rand"
	"time"

	"golang/internal/svc"
	"golang/model/user"

	"github.com/zeromicro/go-zero/core/logx"
)

type PingLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewPingLogic(ctx context.Context, svcCtx *svc.ServiceContext) *PingLogic {
	return &PingLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *PingLogic) Ping() error {
	if l.svcCtx.Config.OpenPingCreate {
		db := user.NewUsersModel(l.svcCtx.Database)
		now := time.Now()
		un, pw := randStr(10), randStr(20)
		db.Insert(l.ctx, &user.Users{
			Username:   un,
			Password:   pw,
			CreateTime: now,
			UpdateTime: now,
		})

		l.svcCtx.Redis.SetCtx(l.ctx, un, pw)
	}
	return nil
}

var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func randStr(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}
