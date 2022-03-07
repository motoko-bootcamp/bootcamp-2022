# Motoko bootcamp : core project 👷

# Motivation ❓

The first goal of the Motoko bootcamp is for each student to acquire as much experience and knowledge as possible. <br/> The bootcamp is not a hackathon and shouldn't be approched as a competitive event, this is first and foremost a way for the community to join in a common effort to promote the Internet Computer, Motoko and train a wave of new developers. <br/>

With that in mind : we believe having to work on a complete project in autonomy and with different requirements will provide the following benefits :

- Reinforce knowledge acquired through lectures and daily challenges.
- Increase motivation to follow all lectures by having a concrete end goal.
- Challenge autonomy and creativity of each student.
- Distribute prizes to most deserving students.
- Give a small taste of what being a developer and working on a project looks like to beginner students.
- Having live-project to showcase how cool is the Motoko-bootcamp. 😎

For **intermediate** students, there is also the strong possibility that some Dev Mentors will be reviewing your core project as they look to fill job roles, so your core project is also a way to shine and showcase your talents. 🔥

# Requirements 🎯

The core project is to create a live: **Basic NFT minter**.

In it's most simple version, the project should be composed of one webpage where the user can login, click on a button and then mint an nft that will belong to the user.

- One webpage composed of a **login button** using a wallet.
- One backend canister using the **DIP 721** standard.
- One **mint button** that will mint one or more NFT(s) for the user which consists of SVG artwork (stock artwork provided below).
- A way to display the NFT sent to the user, either by displaying it within the webpage or redirecting the user to the raw NFT image.

## Beginner 👦

Those requirements are probably already challenging enough for beginners, but you can still improve your own project by being creative, here are some ideas.

- Add some form of customization to the NFT. (random or user-selection)
- Creative design for the webpage.
- Add some functionality around the NFT : (login, private access ...).

## Intermediate 👨

For intermediate students, we are adding two additional requirements:

1. We want you to integrate some form of token transactions into your application. We don't want to involve any tokens with actual value and the current workflow to verify payment on the IC is quite cumbersome, so we have created a **Motoko bootcamp token** that you'll need to use in one way or another in your own project. These have no value and will be burned after the bootcamp is over. We will very soon be releasing a token faucet where you can get as many tokens as you might need. The most basic way to use tokens would be to make user pay a few tokens before allowing the mint process, but we are excited to see what other creative ways students will fullfill this token requirement.

2. We want you to create a front end that displays all of the NFTs from your collection held by the wallet of a logged in user, as well as a way to view some other NFTs minted in your collection not owned by the user. This could simply be a log of mint history, a directory of other users and their NFTs, a social feed of some kind, but basically we expect your application to display more NFTs than what's expected from the beginner project.

## Example 👀

Here's a website called **<a href="https://qmr4u-2yaaa-aaaad-qbaxa-cai.ic0.app/about" target="\_blank"> Bob nfts </a>** that is a good example of a live avatar minter on the Internet Computer.

This website allow users to login using **<a href="\_https://github.com/Toniq-Labs/stoic-wallet" target="\_blank"> Stoic Wallet </a>**, to access some informations about the project once you're logged in and then use the mint button to create an NFT based on any content on the Internet Computer (by providing the url), you can also add some customization options around the NFTs with some Bob flairs. 🎨

The source ode for this project is available **<a href="https://github.com/Toniq-Labs/creator-nfts" target="\_blank"> on this public GitHub repo</a>**.

If you want to know more about this specific project, it's utility and roadamp you can **<a href="https://www.dfinitycommunity.com/a-closer-look-at-epic-nfts-bobnfts-and-the-future-of-nfts-on-the-internet-computer/" target="\_blank"> read about it here </a>**. </i>

Don't freak out if this seems way too much work for one week, the goal is to make the best project you can. <br/> Even if you don't succeed in making NFTs in one week (and if you are a beginner this will probably be really difficult), the goal is to create something with your own hands, get some practice and try to learn a few things along the way.

# Faucet 💰

**<a href="https://bootcamp-faucet.vercel.app/" target="\_blank"> Here is the URL </a>** for the Motoko Bootcamp Tokens.

If you would like to few the code for the faucet, **<a href="https://github.com/stopak/bootcamp_faucet" target="\_blank"> you can find that here </a>**.

Other useful info:

1. The canister id: yeeiw-3qaaa-aaaah-qcvmq-cai
2. Your account ID if someone needs to send you more tokens. </br>```import { getAccountId, getTokenIdentifier } from '../utils'; getAccountId(Principal.from('```**[YOUR PRINCPLE ID]**```'))``` </br>using plug api from: https://docs.plugwallet.ooo/getting-started/connect-to-plug/#requestconnectrequestconnectparams
4. URL to the plug article on exporting your wallet to dfx: https://twitter.com/plug_wallet/status/1429947938248314881
5. A sample send command so you know how to send your tokens </br>```dfx canister --network ic call yeeiw-3qaaa-aaaah-qcvmq-cai send_dfx 'record{memo=0; amount=record{e8s=AMOUNT_X_10^8;};fee=record{e8s=PROPER_FEEE}; from_subaccount=null; to="DEST_ACCOUNTID_NOT_PRINCIPAL"; created_at_time=null;}'```

# Submission 📝

We will publish the form to submit your core project here within the next day or two.

# Ressources & Artwork 📚

Here are some ressources for you to complete this project :

- DIP 721 standard in **<a href="https://github.com/SuddenlyHazel/DIP721/blob/main/src/DIP721/DIP721.mo" target="_blank" > Motoko </a>** and **<a href="https://github.com/Psychedelic/DIP721" target="_blank"> Rust. </a>** (The Motoko implementation is not complete but this is already enough for this project).
- We commissioned (3) different sets of SVG artwork from (3) different artists for you to use for your core project. You can find all of this artwork in **<a href="https://drive.google.com/drive/folders/1JKkOq1bpqAQ9hVbs12CkhuvPkCMYDwph?usp=sharing" target="_blank" > this Google Drive Folder</a>**.
- SVG layers can be easily recombined/manipulated with javascript, and you can style or even animate SVG elements with CSS! **<a href="https://www.w3schools.com/graphics/svg_intro.asp" target="_blank" >w3schools has a great SVG tutorial here</a>**.
- Tweaking the design of SVG images can be done with free tools like **<a href="https://inkscape.org/" target="_blank" >Inkscape</a>** (or even a text editor).

# Prizes 🎁

Based on all submissions, best students for each track (beginner & intermediate) will receive prizes. <br/>
You can **<a href="https://www.dfinitycommunity.com/motoko-bootcamp-prizes/">read more details here </a>**.
