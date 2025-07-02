import os
import sys
# DON'T CHANGE THE ORDER OF THESE IMPORTS
from flask import Flask
from flask_cors import CORS

from src.routes.user import user_bp
from src.routes.contact import contact_bp
from src.routes.messages import messages_bp # Import the new blueprint

# DON'T CHANGE THE ORDER OF THESE IMPORTS

app = Flask(__name__, static_folder="static", static_url_path="/")
CORS(app)

app.register_blueprint(user_bp, url_prefix="/api/user")
app.register_blueprint(contact_bp, url_prefix="/api/contact")
app.register_blueprint(messages_bp, url_prefix="/api/messages") # Register the new blueprint

@app.route("/")
def index():
    return app.send_static_file("index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=os.environ.get("PORT", 5000))


