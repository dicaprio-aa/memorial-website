const memorialVideoFiles = [
    "file (1).mp4",
    "file (2).mp4",
    "file (3).mp4",
    "file (4).mp4",
    "file (5).mp4",
    "file (6).mp4",
    "file (7).mp4",
    "file (8).mp4",
    "file (9).mp4",
    "file (10).mp4",
    "file (11).mp4",
    "file (12).mp4",
    "file (13).mp4",
    "file (14).mp4",
    "file (15).mp4",
    "file (16).mp4",
    "file (17).mp4",
    "file (18).mp4",
    "file (19).mp4",
    "file (20).mp4",
    "file (21).mp4",
    "file.mp4"
];

const videoGrid = document.querySelector("#video-grid");

if (videoGrid) {
    memorialVideoFiles.forEach((filename, index) => {
        const source = `assets/videos/${encodeURIComponent(filename)}`;
        const card = document.createElement("article");
        card.className = "video-card";

        const frame = document.createElement("div");
        frame.className = "video-frame";

        const video = document.createElement("video");
        video.controls = true;
        video.playsInline = true;
        video.preload = "none";
        video.dataset.src = source;
        video.poster = "assets/images/cover.png";
        video.setAttribute("aria-label", `Video memory ${index + 1} of Akhila Reji`);
        video.hidden = true;

        const placeholder = document.createElement("button");
        placeholder.className = "video-placeholder";
        placeholder.type = "button";
        placeholder.setAttribute("aria-label", `Play video memory ${index + 1}`);

        const playIcon = document.createElement("span");
        playIcon.className = "play-icon";
        playIcon.setAttribute("aria-hidden", "true");
        playIcon.textContent = "▶";

        const prompt = document.createElement("span");
        prompt.textContent = "Play video memory";
        placeholder.append(playIcon, prompt);
        frame.append(video, placeholder);

        const info = document.createElement("div");
        info.className = "video-info";

        const description = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = `Video memory ${index + 1}`;
        const caption = document.createElement("p");
        caption.textContent = "A video memory of Akhila Reji.";
        description.append(title, caption);

        const download = document.createElement("a");
        download.className = "video-download";
        download.href = source;
        download.download = filename;
        download.textContent = "Download";

        info.append(description, download);
        card.append(frame, info);
        videoGrid.append(card);
    });
}
