<template>
<div id="enter_modal" class="modal enter_modal">
    <div class="modal-content enter_modal_content">
        <a class="close close_enter_modal">&times</a>
        <form>
            <div class="form-group">
                <p class="form_title mb-lg-5"> ВХОД </p>
                <div class="enter_form mb-4">
                    <label class="form_label" for="inputEmail">ПОЧТА</label>
                    <input type="email" class="form-control input_email" id="inputEmail"
                           aria-describedby="emailHelp"
                           placeholder="ivan.ivanov@gmail.com">
                    <small id="emailHelp" class="form_clue_text">Введите ту
                        почту, к которой привязон бот в telegram</small>
                </div>

                <button id="submit_btn" type="submit" class="btn m-auto">
                    Получить код
                </button>
                <small class="text-center form_clue_text mb-lg-5">Найти почту, <span
                        class="form_clue_text form_clue_highlighted">инструкция</span></small>


                <div>
                    <p class="form_clue_text form_clue_text">Не зарегистрирован в боте?</p>
                    <a href="#link_page" onclick="closeModal('enter_modal')"
                       class="form_clue_text form_clue_highlighted">Пройди регистрацию</a>
                </div>
            </div>
        </form>
    </div>
</div>
</template>