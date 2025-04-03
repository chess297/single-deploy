package config

import (
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/rest"
)

type Config struct {
	rest.RestConf
	DatabaseDsn string
	// 是否开启 ping 接口创建随机用户，安全起见demo不处理
	OpenPingCreate bool
	RedisConf      redis.RedisConf
}
