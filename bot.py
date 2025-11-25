import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

BOT_TOKEN = "8379243111:AAGAJjaEQf3VcyaeuuEbqJ7qLL6SGLuNxWc"
TEST_URL = "https://metamarketing.muza.team/test"


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send the test invitation with a button."""
    keyboard = InlineKeyboardMarkup(
        [[InlineKeyboardButton(text="Открыть тест", url=TEST_URL)]]
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

