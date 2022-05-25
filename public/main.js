export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    // Load cat pic
    fetchImage();

    let votes = 0;
    const count = document.createElement("div");
    // Create new img button
    const button = document.createElement("button");
    button.innerText = "New Kitty";
    container.appendChild(button);
    // button.addEventListener("click", e => {
    //     fetchImage();
    //     votes = 0;
    //     count.innerText = `Popularity Score ${votes}`;
    // });

    // Create vote container
    const scorebox = document.createElement("div");

    const upvote = document.createElement("button");
    // upvote.addEventListener("click", e => votes++);

    const downvote = document.createElement("button");
    // downvote.addEventListener("click", e => votes--);

    upvote.addEventListener("click", e => {
        votes++
        count.innerText = `Popularity Score ${votes}`;
    });
    downvote.addEventListener("click", e => {
        votes--
        count.innerText = `Popularity Score ${votes}`;
    });

    count.innerText = `Popularity Score 0`;
    upvote.innerText = "^";
    downvote.innerText = "v";

    scorebox.appendChild(upvote);
    scorebox.appendChild(count);
    scorebox.appendChild(downvote);
    container.appendChild(scorebox);

    // Create comments
    const form = document.createElement("form");

    const comment = document.createElement("label");
    comment.setAttribute("for", "comment");
    comment.innerText = "Comment: ";

    const text = document.createElement("input");
    text.setAttribute("id", "comment");
    text.setAttribute("type", "text");

    const submit = document.createElement("button");
    submit.innerText = "Submit";

    form.appendChild(comment);
    form.appendChild(text);
    form.appendChild(submit);
    container.appendChild(form);

    const commentBox = document.createElement("div");
    container.appendChild(commentBox);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const com = document.createElement("div");
        com.innerText = text.value;
        commentBox.appendChild(com);
    })

    button.addEventListener("click", e => {
        fetchImage();
        votes = 0;
        count.innerText = `Popularity Score ${votes}`;
        commentBox.innerHTML = "";
        text.value = "";
    });

};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;

    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
