<template>
    <div class="flex-1">
        <body>  
          <div id="content-container" class="flex flex-col justify-center px-10">
            <div class="heading-container">
              <div class="heading">Resources</div>
              <hr class="heading"/>
            </div>
            <div id="notification-container-res" class="flex flex-col justify-start items-center">
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">
                    Literacy and Basic Skills Module
                  </div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"> <IconDownload/><a href="/one.pdf" target="_blank" download=""> training-manual1.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/two.pdf" target="_blank" download=""> training-manual2.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/three.pdf" target="_blank" download="">  training-manual3.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">Application Forms</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/four.pdf" target="_blank" download=""> application.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/five.pdf" target="_blank" download=""> waiver.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/six.pdf" target="_blank" download=""> waiver2.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">2023 Summer Camp Files</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/four.pdf" target="_blank" download=""> schedule.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/five.pdf" target="_blank" download=""> price.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/six.pdf" target="_blank" download="">apply.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="rounded-tl-card2">
                <div class="flex flex-col">
                  <div class="text-2xl font-bold mb-3">Application Forms</div>
                </div>
                <div class="flex flex-col">
                  <div class="files-list-container">
                    <ul>
                      <li class="mb-2 flex"><IconDownload/><a href="/one.pdf" target="_blank" download="">application.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/two.pdf" target="_blank" download=""> waiver.pdf</a></li>
                      <li class="mb-2 flex"><IconDownload/><a href="/three.pdf" target="_blank" download="">waiver2.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </div>
</template>

<style>
.rounded-tl-card {
  color: #00565a;
  margin: 1.5em;
  padding: 1em;
  background-color: #fff;
  border-radius: 50px 0 0 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  max-height: 350px;
  overflow-y: hidden;
}

.rounded-tl-card2 {
  display: flex;
  flex-direction: column;
  color: #00565a;
  margin: 1.5em;
  margin-bottom: 0.8rem;
  padding: 1em;
  background-color: #fff;
  border-radius: 25px 0 0 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  max-height: 350px;
  width: 100%;
  max-width: 1200px;
  overflow-y: hidden;
}

.left-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.7;
  padding-right: 1rem;
}

.right-section {
  display: flex;
  flex-direction: column;
  flex: 6;
}

h1 {
  color: #00565a;
  font-size: large;
  font-weight: 700;
}

hr {
  color: #00734f;
  border: 4px solid #00734f;
}

.heading {
  color: #00734f;
  font-weight: 700;
  font-size: 38px;
}

.heading-container {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: block;
}
.btn {
  height: 68px;
  width: 175px;
  background-color: #00734f;
  border-radius: 10px;
  color: white;
}
#notification-container-res {
  min-height: 800px;
  background-color: #00734f;
}
</style>
