#!/usr/bin/env sh.

# 确保脚本抛出遇到的错误
set -e

before="\033[32"
rear="\033[0m"

sleep 1s

RemotePull () {
  sleep 1s

  echo -e "$before 开始从 GitHub 拉取新的请求请稍后... $rear"

  echo -e "$before 请输入你要拉取的分支 $rear"
  read temp_branch

  git pull origin "$temp_branch"
  echo -e "$before 分支拉取成功 $rear"

  echo -e "$before 拉取成功并合并到当前分支. $rear"

  sleep 1s
}


Bale() {
  sleep 1s

  # Please wait to start packaging the project...
  echo -e "$before 开始打包项目请稍后... $rear"

  # Generate static files.
  npm run build

  # Project package completed.
  echo -e "$before 项目打包完成. $rear"

  sleep 1s
}

echo "请选择要执行的 GitHub 操作:"


select var in "pull" "build" "exit";
do
  break
done

sleep 1s


case $var in
  pull)
    RemotePull 
  ;;
  build)
    Bale
  ;;
  exit)
    exit
  ;;
  *)
    echo -e "$before 请输入正确的格式. $rear"
    npm run deploy
  ;;
esac

# exit the program
exit



# # 生成静态文件
# npm run docs:build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'


# git push -f  git@github.com:Kivenxue/kivenblog.git master:gh-pages

# cd -