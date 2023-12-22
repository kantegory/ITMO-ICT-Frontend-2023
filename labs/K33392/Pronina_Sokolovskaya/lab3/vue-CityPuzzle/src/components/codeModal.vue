<template>
    <div id="code_input_modal" class="modal code_input_modal">
        <div class="modal-content code_input_modal_content">
            <span class="close close_code_input_modal">&times;</span>
            <div class="form-group">
                <p class="form_title mb-lg-5"> Подтверждение </p>
                <div class="enter_form mb-4">
                    <p class="code_label">Мы отправили вам подтверждение в телеграм</p>
                </div>
            </div>
            <form>
                <fieldset name='number-code' data-number-code-form>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-0' data-number-code-input='0' required autofocus/>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-1' data-number-code-input='1' required/>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-2' data-number-code-input='2' required/>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-3' data-number-code-input='3' required/>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-4' data-number-code-input='4' required/>
                    <input type="number" autocorrect="off" autocomplete="on" autocapitalize="none" spellcheck="false"
                        name='number-code-5' data-number-code-input='5' required/>
                </fieldset>
            </form>
            <small class="text-center form_clue_text mb-lg-5">Код не пришел? <span
                    class="form_clue_text form_clue_highlighted">Отправить еще раз</span></small>
            <button id="submit_code_btn" type="submit" class="btn m-auto">
                Готово
            </button>
        </div>
    </div>
</template>