import mongoose from "mongoose";

// export const formathashtags = (hashtags) =>
// hashtags.split(",").map((word)=> (word.startsWith("#") ? word : `#${word}`)) 이것도 좋은 예시 두번쨰임

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, required: true, trim: true, minlength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

// videoSchema.pre("save", async function () { 세이브는 몽고 내장함수
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? word : `#${word}`));
// }); 하나의 좋은 미들웨어 방법이지만 더 좋은 방법을 추구하여 지움

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
