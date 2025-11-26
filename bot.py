import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

BOT_TOKEN = "8418694131:AAGN3lPJdLK6ve8w8i0Qq7XrKqx8GZTDwk8"
TEST_URL = "https://metamarketing.muza.team/test"


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send the test invitation with a button."""
    keyboard = InlineKeyboardMarkup(
        [[InlineKeyboardButton(text="Открыть тест", web_app=WebAppInfo(TEST_URL))]]
    )
    await update.message.reply_text(
        text="Откройте тест по кнопке ниже.", reply_markup=keyboard
    )


def main() -> None:
    """Entrypoint to start the bot."""
    logging.basicConfig(level=logging.INFO)
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling(close_loop=False)


if __name__ == "__main__":
    main()

