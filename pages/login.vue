<template>
    <div class="login-middle-section-container">
          <section>
            <div class="login-form-container">
              <div class="title">
                <div>Log in</div>
              </div>
              <form class="login-form" action="#" method="post">
                <div class="email-row">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div class="password-row">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div class="submit-button-row">
                  <span class="form-label"></span>
                  <div class="button-input">
                    <button type="submit" class="btn2">Log in</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
</template>

<style>
      .login-middle-section-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
      }

      .login-form-container {
        padding-left: 3rem;
        padding-right: 3rem;
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        max-width: 800.94px;
        width: 500px;
        border-radius: 16px;
        background-color: #cce7f0;
      }

      .login-form {
        padding: 20px 20px 20px 20px;
        width: 100%;
      }

      .title div {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }

      .email-row,
      .password-row {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .email-row {
        margin-bottom: 1rem;
      }

      .form-label {
        display: inline-block;
        text-align: right;
        width: 150px;
        margin-right: 20px;
      }
      .submit-button-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .email-row input {
        width: 100%;
        background: #ffffff;
        border: 1px solid #c0c0c0;
        border-radius: 4px;
        height: 30px;
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
      }

      .password-row input {
        width: 100%;
        background: #ffffff;
        border: 1px solid #c0c0c0;
        border-radius: 4px;
        height: 30px;
        font-size: 12px;
        padding-left: 10px;
        padding-right: 10px;
      }

    </style>