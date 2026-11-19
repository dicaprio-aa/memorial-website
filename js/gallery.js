const galleryFilenames = [
    "cover.png",
    "f15607_00d9bd62f73749e6bdf9e3ad09a34740~mv2.jpg",
    "f15607_0492a743463c4f6e85c8b156e18f9bc1~mv2.jpg",
    "f15607_04f2a79659c54376887d38fef8548609~mv2.jpg",
    "f15607_07f18ccd619141c282bc4f352d88edf8~mv2.jpg",
    "f15607_0aa5e02c8a884110a78bbb839959764e~mv2.jpg",
    "f15607_0e36a73a6f35444a9e990adf81bc071b~mv2.jpg",
    "f15607_0ed66b80ec3d4f42806c4d3fee586a78~mv2.jpg",
    "f15607_0f10ce00fd07417cb187085dd3abbbfb~mv2.jpg",
    "f15607_11cb690efde84ae58242657b2d4448b5~mv2.jpg",
    "f15607_13299411e5084afd9a24499e8132d21a~mv2.jpg",
    "f15607_1380eb71a7ad43159d40634e80ab5ab2~mv2.jpg",
    "f15607_138a48c38e644943acd2de324fff6f0b~mv2.jpg",
    "f15607_17e1aaf797e34b2fb65d5711d5283ad8~mv2.jpg",
    "f15607_1a3ed3d6aeff485692a0f1d74fe9390c~mv2.jpg",
    "f15607_1c576e96c460443791583a2f9d2978a5~mv2.jpg",
    "f15607_23bb5009dbfb441bb6e477c696d19ed9~mv2.jpg",
    "f15607_26743124ebcc453fb6b78efd4f5fcf56~mv2.jpg",
    "f15607_28720557be43413f97aee3ced77e4603~mv2.jpg",
    "f15607_295f7ed6e394472ca343853d8d8b82ef~mv2.jpg",
    "f15607_2c92d4653ed4408689bf1e41e0ae4ddb~mv2.jpg",
    "f15607_2ca867babd394e60b775af9d35eb5df8~mv2.jpg",
    "f15607_2f9f83a0f6b949918575df6cbe906bcf~mv2.jpg",
    "f15607_30feb08a48254224bc99b9e621419a6a~mv2.jpg",
    "f15607_31dda985b1484485867fa236a75424c5~mv2.jpg",
    "f15607_32f70cac6b454bc88afdac6845f92ee7~mv2.jpg",
    "f15607_33cfc25efd044fc5aee461fc5867b6ea~mv2.jpg",
    "f15607_3447ac3cb66c4e439a313492ea48fa9d~mv2.jpg",
    "f15607_35a5e0396b534691bcf9cd1df3416226~mv2.jpg",
    "f15607_3c654478eff749b7b324f19ab558532c~mv2.jpg",
    "f15607_3dd42312b35d49ae9150bd51695b543b~mv2.jpg",
    "f15607_3ec82b4101ef470cb1c6c4d937b13069~mv2.jpg",
    "f15607_3ed91a618d7c4266bc52e5837128c0ac~mv2.jpg",
    "f15607_3f8de7cd9606485aa31fadca3dc7c30d~mv2.jpg",
    "f15607_40848f0748564be3a5aaabbb7f5aee60~mv2.jpg",
    "f15607_42bc0b973d5c42429c7eae560c0c24b7~mv2.jpg",
    "f15607_45502fdfcd87411aa7d4ffd8d42690c3~mv2.jpg",
    "f15607_45620b2cf19c4e7080da7f559fb97826~mv2.jpg",
    "f15607_45e264df0b244434a17096de408407d7~mv2.png",
    "f15607_47019a7466144e34a135d6e459cd658b~mv2.jpg",
    "f15607_4978d2e86ea348baaa513bca2059aa68~mv2.jpg",
    "f15607_4adc7adfdfee487c9e6a55b0b2a00d53~mv2.jpg",
    "f15607_4e47396b87ca421da9b75d6723d7af04~mv2.jpg",
    "f15607_4fad945e1db14519844635b84c21c5e6~mv2.jpg",
    "f15607_4fbbf9558a574df18ffe03067bcceba1~mv2.jpg",
    "f15607_536f770d8bc64a7aabb70030f6729486~mv2.jpg",
    "f15607_56789a0bee504752862a1e3369da731d~mv2.jpg",
    "f15607_56e21ef06de94b598b5e7816aacbd288~mv2.jpg",
    "f15607_5799b17a191544529882e5d10e5dcdfc~mv2.jpg",
    "f15607_5929a1ccb180492395f94ee5f98bf129~mv2.jpg",
    "f15607_5b169d3e0d374d1a90c4c43f5c5300ac~mv2.jpg",
    "f15607_5b18e8d837c94b71b859b0d2a97f79f9~mv2.jpg",
    "f15607_5bee5f4197cb483981bab77a86105d72~mv2.jpg",
    "f15607_5e54fae2fdf74c29bc0f4c338378d841~mv2.jpg",
    "f15607_5ec99ebf5de240aba25540be356e2773~mv2.jpg",
    "f15607_5fa7effb5a094d3b937cc67270919a4c~mv2.jpg",
    "f15607_630a93b7900048258f49f2ee3aa66fcd~mv2.jpg",
    "f15607_63cec3be5b414f889304243f8c4a3caf~mv2.jpg",
    "f15607_65938c523b9d489dae857cd8c997efe5~mv2.jpg",
    "f15607_69b5b2c04ba642e7bfd7b2862a2dd1a4~mv2.jpg",
    "f15607_6abf069042c447389ff2b58cf55cd00e~mv2.jpg",
    "f15607_6d21bd7a0117420386fcbae40e738ac1~mv2.jpg",
    "f15607_6d7f8c16219440fcb4466d8af8f8a944~mv2.jpg",
    "f15607_6dd28d213cbc49e4aade674d72565247~mv2.jpg",
    "f15607_6fd6a8dd578d4b35b861dc67139a9554~mv2.jpg",
    "f15607_701a351a69df440b88f32e28e6ad0ce8~mv2 (1).jpg",
    "f15607_701a351a69df440b88f32e28e6ad0ce8~mv2.jpg",
    "f15607_70471df7d3ea4e5c865010044e7cbaab~mv2.jpg",
    "f15607_71341fdbeffc4df2bee9b8d1598d7214~mv2.jpg",
    "f15607_71393fbf43e248ac9659686b4af9883e~mv2.jpg",
    "f15607_7413375f574143b8b4c40714e8fe6287~mv2.jpg",
    "f15607_7755d95e7d464234852999545a01bd81~mv2.jpg",
    "f15607_78f93c9470054dc88d933a032c9b0b13~mv2.jpg",
    "f15607_7bddcb9c801f47c39815ff0446daf254~mv2.jpg",
    "f15607_7d0d0d85e34545e2ae7545d1677f2375~mv2.jpg",
    "f15607_7dd2947b56674accbc7a3ce47b4ada13~mv2.jpg",
    "f15607_814c17dbfeaa4493b6682a164e1a78f0~mv2.jpg",
    "f15607_856ea68baec54a43a1b2796a05f45ce0~mv2.jpg",
    "f15607_880cc29029114c91831caa107b1ef8c0~mv2.jpg",
    "f15607_8840d8e115a84bfeb9f532d91cad709b~mv2.jpg",
    "f15607_8920647dafb6476f92cd9a73c7bb63d5~mv2.jpg",
    "f15607_8bb86873dfdd4e7886be5437944c64d5~mv2.jpg",
    "f15607_8e14c0362efa4abf9bfff18c82eca961~mv2.jpg",
    "f15607_8f426378b35f41c9be0d9d4c6acc3217~mv2.jpg",
    "f15607_8fa78447556b439e864533af43f4318d~mv2.jpg",
    "f15607_914fd2a7075e45dfa09720d33b252e3e~mv2.jpg",
    "f15607_91c726caa58248479e1cf783bff89edc~mv2.jpg",
    "f15607_96355be5d51542c2aaa0ab4a0e11b5fd~mv2.jpg",
    "f15607_96eb5bb49b3d4ec5b440464e9a164336~mv2.jpg",
    "f15607_9be05182dee645fc90ef81bfff378b88~mv2.jpg",
    "f15607_9ec6867365ad40c6adf657c4cd73d878~mv2.jpg",
    "f15607_a07bc6384bcf4e24ac6b00712c205275~mv2.jpg",
    "f15607_a0d530b3723848da951d39c4f478a167~mv2.jpg",
    "f15607_a3e0a097f25f44299b21848eb4027870~mv2.jpg",
    "f15607_a41d0e751dee41e2b9a0c80ed0a7c50d~mv2.jpg",
    "f15607_a4c7c473539d4f7fb892b3667de318bb~mv2.jpg",
    "f15607_a60aa801dd444517aef9a095929c0832~mv2.jpg",
    "f15607_a7e797fec34e403ab01e25eb2f02be34~mv2.jpg",
    "f15607_aac9b52636f640adb6682c67481158f8~mv2.jpg",
    "f15607_ab83479cc6ac4cbfa2ddf65ae747ee13~mv2.jpg",
    "f15607_ad9a2231f995459e9cd472146c40ba5a~mv2.jpg",
    "f15607_affd90b3ee1440e4bbac8c576acdeede~mv2.jpg",
    "f15607_b184eb64361d459c89d843421310e4c0~mv2.jpg",
    "f15607_b2c95d5752704c9780053ec551377123~mv2.jpg",
    "f15607_b39f3575046d43de99f03d9990080518~mv2.jpg",
    "f15607_b3fed98de1c649d3bc94bc812e814eb2~mv2.jpg",
    "f15607_b476a12096df4b32b4d51ed55ea2cc00~mv2.jpg",
    "f15607_b5653c280a864c18a618735006ebf0c2~mv2.jpg",
    "f15607_b65ad868ed3b4962bd37d04dd2a9f79c~mv2.jpg",
    "f15607_b7b62ff9ccf948e7b8687ffac71fb134~mv2.jpg",
    "f15607_bc3689f669024e54b6064922113247d3~mv2.jpg",
    "f15607_bd4b1461534f49129617eae96aababef~mv2.jpg",
    "f15607_bdbb8e2cdecf4a00b7696e1289ec8b3e~mv2.jpg",
    "f15607_c01eefaade124c248a3c8ff536aa9c0e~mv2.jpg",
    "f15607_c134ddf6a4df4607b983b2a728214437~mv2.jpg",
    "f15607_c5be1be0e4b840028d9630912168d0bc~mv2.jpg",
    "f15607_c5ef6dba85ac448eacf2d79e01648f9d~mv2.jpg",
    "f15607_c7aea2d4611a423788ed6f3b80088f62~mv2.jpg",
    "f15607_c8aedb921f8043548f54884ae3632ec5~mv2.jpg",
    "f15607_ca6e3e869f0c4c9d871b277dab5b593a~mv2.jpg",
    "f15607_cc80803e53b74fa88851345d20703633~mv2.jpg",
    "f15607_cf2ac5320edb4097bb4b0aba289cb754~mv2.jpg",
    "f15607_d1570d5032e24600b727c3292c5a1abc~mv2.jpg",
    "f15607_d313457be7734aaf9ba2ba7aae6e9512~mv2.jpg",
    "f15607_d8db53f70efe481fa4373f4cdd5f44d7~mv2.jpg",
    "f15607_d903bf0e18f84dcca29f3ce9be07c998~mv2.jpg",
    "f15607_dad04cb74cd246f7aaf7d35d878571ff~mv2.jpg",
    "f15607_dbc18edb356c4df28aebbec46851a04a~mv2.jpg",
    "f15607_dc97cfefef3f44529f4a7dfa16486f5b~mv2.jpg",
    "f15607_e1ad9ce6e48147dfad1703f440ecda22~mv2.jpg",
    "f15607_e28c53f337634fd3ab47f3d3a968d439~mv2.jpg",
    "f15607_e3cbf7727d704fb8918bf4c9d69fddb4~mv2.jpg",
    "f15607_e3e2b969937647a0a42e4e394c16800d~mv2.jpg",
    "f15607_e4725c2ba59d45a98ac9a692a3c48df1~mv2.jpg",
    "f15607_e4b6de0c93214817ba25a990deaa23de~mv2.jpg",
    "f15607_e799efce55254ec1b062c6b4882f435c~mv2.jpg",
    "f15607_e89964abd25145ecb922fc4eca3e6c9a~mv2.jpg",
    "f15607_e89d01e1f41c4241802cd502a635a1ae~mv2.jpg",
    "f15607_ea56a7d5c9a84bccacba0e545863e506~mv2.jpg",
    "f15607_eaa4f32511634772ae3d813f00db36b9~mv2.jpg",
    "f15607_ebd03998f2f6413384b4898b8bf846cc~mv2.jpg",
    "f15607_ed53943bcb6f4b2a8ec9f6336ed1e436~mv2.jpg",
    "f15607_ee79e0f397e24d5a958126e3b95d27fb~mv2.jpg",
    "f15607_f000a6dfbc0b4b4caa3b2df243fc21c0~mv2.jpg",
    "f15607_f0219d3081cc428bbfc2a69664f381ed~mv2.jpg",
    "f15607_f11ef19d460d4b719b3eb46f5aafc46b~mv2.jpg",
    "f15607_f28e6a167784459eb42ecc04c09a8985~mv2.jpg",
    "f15607_f3943d45c0524bf58ad5bfa1afde85c6~mv2.jpg",
    "f15607_f4decfe642664b85b7b4af0aa1647cb9~mv2.jpg",
    "f15607_f62d4f13d0d64820a7edfd63e464de84~mv2.jpg",
    "f15607_f6fab56832ae483290979e869f29cecc~mv2.jpg",
    "f15607_faeaebed5e724392ac54a3cab5381c0c~mv2.jpg",
    "f15607_fbc74b06d44a4894aed04d3e11067c9e~mv2.jpg",
    "family.jpg",
    "1234.jpg"
];

const gallery = document.querySelector("#carousel-stage");

if (gallery) {
    const categoryOrder = ["family", "friends", "moments", "celebrations"];
    const photos = galleryFilenames.map((filename, index) => ({
        filename,
        type: "image",
        category: filename === "cover.png" ? "moments" : categoryOrder[(index - 1) % categoryOrder.length]
    }));
    const videoFilenames = [
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
    const videos = videoFilenames.map((filename, index) => ({
        filename,
        type: "video",
        category: "videos",
        poster: galleryFilenames[index % galleryFilenames.length]
    }));
    const memories = [...photos, ...videos];
    const positions = [
        { name: "far-left", offset: -2 },
        { name: "left", offset: -1 },
        { name: "center", offset: 0 },
        { name: "right", offset: 1 },
        { name: "far-right", offset: 2 }
    ];
    const stage = gallery;
    const emptyMessage = document.querySelector("#carousel-empty");
    const count = document.querySelector("#carousel-count");
    const previousButton = document.querySelector("#carousel-previous");
    const nextButton = document.querySelector("#carousel-next");
    const filters = [...document.querySelectorAll(".gallery-filter")];
    const lightbox = document.querySelector(".gallery-lightbox");
    const lightboxImage = lightbox.querySelector("img");
    const lightboxVideo = lightbox.querySelector("video");
    const lightboxVideoError = lightbox.querySelector(".lightbox-video-error");
    const lightboxCount = lightbox.querySelector(".lightbox-count");
    const lightboxDownload = lightbox.querySelector(".lightbox-download");
    let activeCollection = memories;
    let activeIndex = 0;
    let lightboxCollection = photos;
    let lightboxIndex = 0;
    let animationTimer;

    const mediaPath = (item) => item.type === "video"
        ? `assets/videos/${encodeURIComponent(item.filename)}`
        : `assets/images/${encodeURIComponent(item.filename)}`;
    const altText = (item) => item.filename === "cover.png"
        ? "Akhila Reji standing among flowers"
        : "A photograph in memory of Akhila Reji";

    function renderCarousel() {
        const hasMedia = activeCollection.length > 0;
        emptyMessage.hidden = hasMedia;
        emptyMessage.textContent = hasMedia
            ? ""
            : "No videos have been added to this memorial gallery yet.";
        previousButton.disabled = !hasMedia;
        nextButton.disabled = !hasMedia;

        for (const position of positions) {
            const card = stage.querySelector(`[data-position="${position.name}"]`);
            if (!hasMedia) {
                card.hidden = true;
                card.replaceChildren();
                continue;
            }

            const itemIndex = (activeIndex + position.offset + activeCollection.length) % activeCollection.length;
            const item = activeCollection[itemIndex];
            card.hidden = false;
            card.dataset.itemIndex = String(itemIndex);
            card.setAttribute("aria-label", `View ${item.type === "video" ? "video" : "photo"} ${itemIndex + 1} of ${activeCollection.length}`);

            if (item.type === "video") {
                const video = document.createElement("video");
                video.src = mediaPath(item);
                video.poster = `assets/images/${encodeURIComponent(item.poster)}`;
                video.muted = true;
                video.playsInline = true;
                video.preload = "metadata";
                video.setAttribute("aria-hidden", "true");
                const playIcon = document.createElement("span");
                playIcon.className = "carousel-play";
                playIcon.setAttribute("aria-hidden", "true");
                playIcon.textContent = "▶";
                card.replaceChildren(video, playIcon);
            } else {
                const image = document.createElement("img");
                image.src = mediaPath(item);
                image.alt = altText(item);
                image.loading = "eager";
                image.decoding = "async";
                card.replaceChildren(image);
            }

            card.onclick = () => openLightbox(activeCollection, itemIndex);
        }

        count.textContent = hasMedia
            ? `${activeIndex + 1} of ${activeCollection.length}`
            : "0 videos";
    }

    function moveCarousel(direction) {
        if (activeCollection.length < 2 || stage.classList.contains("is-changing")) {
            if (activeCollection.length === 1) {
                activeIndex = 0;
                renderCarousel();
            }
            return;
        }

        stage.classList.add("is-changing");
        window.clearTimeout(animationTimer);
        animationTimer = window.setTimeout(() => {
            activeIndex = (activeIndex + direction + activeCollection.length) % activeCollection.length;
            renderCarousel();
            window.requestAnimationFrame(() => stage.classList.remove("is-changing"));
        }, 160);
    }

    function showLightboxItem(collection, index) {
        lightboxCollection = collection;
        lightboxIndex = (index + collection.length) % collection.length;
        const item = collection[lightboxIndex];
        const path = mediaPath(item);

        lightboxCount.textContent = `${lightboxIndex + 1} of ${collection.length}`;
        lightboxDownload.href = path;
        lightboxDownload.download = item.filename;
        lightboxImage.hidden = item.type === "video";
        lightboxVideo.hidden = item.type !== "video";
        lightboxVideoError.hidden = true;

        if (item.type === "video") {
            lightboxImage.removeAttribute("src");
            lightboxVideo.poster = `assets/images/${encodeURIComponent(item.poster)}`;
            lightboxVideo.src = path;
        } else {
            lightboxVideo.pause();
            lightboxVideo.removeAttribute("src");
            lightboxImage.src = path;
            lightboxImage.alt = altText(item);
        }
    }

    function openLightbox(collection, index) {
        showLightboxItem(collection, index);
        lightbox.showModal();
    }

    function moveLightbox(direction) {
        if (lightboxCollection.length > 1) {
            showLightboxItem(lightboxCollection, lightboxIndex + direction);
        }
    }

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            filters.forEach((button) => {
                const isActive = button === filter;
                button.classList.toggle("is-active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });

            const category = filter.dataset.category;
            activeCollection = category === "all"
                ? memories
                : category === "videos"
                    ? videos
                    : photos.filter((photo) => photo.category === category);
            activeIndex = 0;
            stage.classList.remove("is-changing");
            window.clearTimeout(animationTimer);
            renderCarousel();
        });
    });

    previousButton.addEventListener("click", () => moveCarousel(-1));
    nextButton.addEventListener("click", () => moveCarousel(1));
    lightbox.querySelector(".lightbox-previous").addEventListener("click", () => moveLightbox(-1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });
    lightbox.addEventListener("close", () => {
        lightboxVideo.pause();
        lightboxVideo.removeAttribute("src");
        lightboxVideoError.hidden = true;
    });
    lightboxVideo.addEventListener("error", () => {
        lightboxVideoError.hidden = false;
    });
    lightbox.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveLightbox(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            moveLightbox(1);
        }
    });

    renderCarousel();
}
