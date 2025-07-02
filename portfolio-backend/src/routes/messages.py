from flask import Blueprint, jsonify
import sqlite3

messages_bp = Blueprint("messages", __name__)

@messages_bp.route("/", methods=["GET"])
def get_messages():
    conn = sqlite3.connect("messages.db")
    cursor = conn.cursor()
    cursor.execute("SELECT name, email, subject, message, timestamp FROM messages ORDER BY timestamp DESC")
    messages = cursor.fetchall()
    conn.close()

    message_list = []
    for msg in messages:
        message_list.append({
            "name": msg[0],
            "email": msg[1],
            "subject": msg[2],
            "message": msg[3],
            "timestamp": msg[4]
        })
    return jsonify(message_list), 200


