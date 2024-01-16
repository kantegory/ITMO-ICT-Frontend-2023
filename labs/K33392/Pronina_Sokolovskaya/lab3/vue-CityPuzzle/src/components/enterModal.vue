<template>
<div v-if="showModal" id="enter_modal" class="modal enter_modal">
    <div class="modal-content enter_modal_content">
        <a class="close close_enter_modal" @click="closeModal">&times</a>
        <template v-if="modalType === 'first'">
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

                <button id="submit_btn" type="submit" class="btn m-auto" @click="submitEmail">
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
        </template>

        <template v-else-if="modalType === 'second'">
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
            <button id="submit_code_btn" type="submit" class="btn m-auto" @click="checkCode">
                Готово
            </button>
        </template>
    </div>

<CodeModal ref="codeModal" />
</div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            modalType: '',
        };
    },
    methods: {
        openModal(type) {
            this.modalType = type;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitEmail(event) {
            event.preventDefault();
            this.closeModal();
            this.openModal('second');
        },
        checkCode() {
            this.closeModal();
            sessionStorage.setItem('status', 'loggedIn');
            this.$router.push('/personal');
        }
    },
}
</script>

<style scoped>
    #enter_modal {
        display: block;
    }
</style>