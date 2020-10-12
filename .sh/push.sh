set -e

before="\033[32m"
rear="\033[0m"

git status

git add -A

echo "$before 请输入提交内容 $rear"
git commit -m "commit"
read $commit 

sleep 1s

TARGET_FILE_TMP=`sh -c 'git branch --no-color 2> /dev/null' | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/' -e 's/\//\_/g'`
echo "查看当前分支"
echo "$TARGET_FILE_TMP"

echo "输入进行的操作"
select var in "push" "exit";
do
  break
done

case $var in
  push)
    echo "正在提交$TARGET_FILE_TMP 请稍后"
    git push origin $TARGET_FILE_TMP
    echo -e "$before▶ $TARGET_FILE_TMP 分支成功推送.$rear"
  ;;
  exit)
    echo "已退出当前程序"
    exit
  ;;
  *)
    echo "输入有误请新运行命令"
    exit
  ;;
esac

# echo -e "$before▶ 请输入您要提交的分支.$rear"
# read branch

exit