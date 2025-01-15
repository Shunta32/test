let score = 0;
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

function moveBall() {
  const gameContainer = document.getElementById("game-container");
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const maxX = containerWidth - ball.offsetWidth;
  const maxY = containerHeight - ball.offsetHeight;

  // ランダムなX、Y位置を計算
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // ボールの位置を更新
  ball.style.left = randomX + "px";
  ball.style.top = randomY + "px";
}

// ボールがクリックされたらスコアを加算し、ボールを移動
ball.addEventListener("click", function() {
  score += 10;
  scoreDisplay.textContent = "スコア: " + score;
  moveBall();
});

// ゲーム開始時にボールをランダムな位置に配置
moveBall();

 
