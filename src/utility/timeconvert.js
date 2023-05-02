const formatIsoToJst = (isoString) => {
  // Dateオブジェクトに変換
  const date = new Date(isoString);

  // 日本標準時（UTC+9）に変換
  const offset = 9 * 60 * 60 * 1000; // 9時間をミリ秒に変換
  const japanDate = new Date(date.getTime() + offset);

  // 年月日時分秒の形式で表示
  const year = japanDate.getFullYear();
  const month = String(japanDate.getMonth() + 1).padStart(2, "0");
  const day = String(japanDate.getDate()).padStart(2, "0");
  const hours = String(japanDate.getHours()).padStart(2, "0");
  const minutes = String(japanDate.getMinutes()).padStart(2, "0");
  const seconds = String(japanDate.getSeconds()).padStart(2, "0");

  return `${year}年${month}月${day}日 ${hours}時${minutes}分${seconds}秒`;
};

export default formatIsoToJst;
