<template>
    <div>
        <TitlePage title="My Programs"/>
        <div id="content-container" class="flex flex-wrap">
            <div id="card1" class="card md:ml-[240px] m-6 md:p-10 p-6">                    
                <div class="mt-4 flex flex-col">
                    <p id="card-text">Today</p>  
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Literacy and Basic Skills</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-01</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Writing Camp</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-01</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Literacy and Basic Skills</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-01</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>                    
            </div>


            <div id="card2" class="card md:ml-[240px] m-6 md:p-10 p-6">
                <div class="mt-4 flex flex-col">
                    <p id="card-text">Upcoming</p>
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Reading Camp</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-02</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Literacy and Basic Skills</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-07</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="card3" class="card flex-auto">
                        <div id="identifiers"><b>Winter Camp</b></div>
                        <div id="identifiers"><b>Toronto, ON</b></div>
                        <div id="identifiers"><b>2023-02-19</b></div>
                        <p id="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<style scoped>
    #card1{
        color: black;
        background-color: #175423;  
        border-radius: 30px 30px 30px 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow-y: hidden;
        width: 500px;
        max-width: 800px;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #card2{
        color: black;
        background-color: #00565a;  
        border-radius: 30px 30px 30px 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow-y: hidden;
        width: 500px;
        max-width: 800px;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #card3{
        color: black;
        background-color: #ffffff;  
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow-y: hidden;
        width: 100%;
        min-height: 200px;
        height: fit-content;
        max-width: 800px;
        align-items: center;
        margin-bottom: 20px;
    }
    
    #card-text{
        color: #ffffff;
        margin-top: 0px;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 15px;
        text-align: left;
        float: left;
    }

    #description{
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 10px;
    }

    #identifiers{
        margin-left: 8px;
        margin-right: 8px;
    }

</style>