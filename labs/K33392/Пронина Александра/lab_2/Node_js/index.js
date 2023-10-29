
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51O4YrtF6FSZKXV4SMZKyVjBigZgvSlVSlfYU0vLiXCI8VEI3Hw3NXFY7mGMmrda7NPKfcCUHs03ztyXUGMhTChxF00gwFLHEy1');

// Не забыть middleware для обработки JSON входных данных
app.use(express.json());

app.post('/process-payment', async (req, res) => {
const cardNumber = req.body.cardNumber;
const cardExp = req.body.cardExp;
const cardCvc = req.body.cardCvc;

try {
// Здесь валяется токен карты с использованием Stripe.js
const token = await stripe.tokens.create({
card: {
number: cardNumber,
exp_month: cardExp.slice(0, 2),
exp_year: cardExp.slice(3),
cvc: cardCvc
}
});

// Обработка платежа с использованием Stripe API
const paymentIntent = await stripe.paymentIntents.create({
amount: 1000, // Сумма платежа
currency: 'usd',
description: 'Описание покупки(?)',
payment_method_types: ['card'],
payment_method: token.id
});

// Отправьте ответ об успешной обработке платежа
res.redirect(302, '/way.html');
} catch (error) {
console.error('Ошибка при обработке платежа:', error);
// Отправьте ответ с ошибкой
res.status(500).send({ success: false, error: error.message });
}
});

app.listen(3000, () => {
console.log('Сервер запущен на порту 3000');
});
