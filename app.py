# from flask import Flask, request, jsonify
# from flask import render_template
# from flask_cors import CORS
#
# # app = Flask(__name__, static_url_path='', static_folder='')
#
# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
#
# # Sample agent data (replace this with your actual agent data)
# agents = [
#     {'name': 'Agent 1', 'slot_timings': '9am - 5pm', 'available': True},
#     {'name': 'Agent 2', 'slot_timings': '10am - 6pm', 'available': True},
# ]
#
#
# @app.route('/updateSlotTimings', methods=['POST'])
# def update_slot_timings():
#     data = request.json
#     agent_name = data.get('agentName')
#     slot_timings = data.get('slotTimings')
#
#     if not agent_name or not slot_timings:
#         return jsonify({'error': 'Agent name and slot timings are required'}), 400
#
#     for agent in agents:
#         if agent['name'] == agent_name:
#             agent['slot_timings'] = slot_timings
#             return jsonify({'message': 'Slot timings updated successfully'}), 200
#
#     return jsonify({'error': 'Agent not found'}), 404
#
#
# @app.route('/markAgentUnavailable', methods=['POST'])
# def mark_agent_unavailable():
#     data = request.json
#     agent_name = data.get('agentName')
#
#     if not agent_name:
#         return jsonify({'error': 'Agent name is required'}), 400
#
#     for agent in agents:
#         if agent['name'] == agent_name:
#             agent['available'] = False
#             print(f"Agent '{agent_name}' marked as unavailable")
#             break
#     else:
#         return jsonify({'error': f'Agent "{agent_name}" not found'}), 404
#
#     return jsonify({'message': f'Agent "{agent_name}" marked as unavailable successfully'}), 200
#
#
# @app.route('/agents', methods=['GET'])
# def get_agents():
#     print("Request received for /agents route")
#     print("List of Agents:")
#     for agent in agents:
#         print(f"Name: {agent['name']}, Slot Timings: {agent['slot_timings']}, Available: {'Yes' if agent['available'] else 'No'}")
#     return jsonify(agents)
#
#
# if __name__ == '__main__':
#     app.run(debug=True)


# This is the current main code

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample agent data (replace this with your actual agent data)
agents = [
    {'name': 'Gaurav', 'slot_timings': '9am - 5pm', 'available': True},
    {'name': 'Praveen', 'slot_timings': '10am - 6pm', 'available': True},
    {'name': 'Prashwil', 'slot_timings': '10am - 6pm', 'available': True},
    {'name': 'Biju', 'slot_timings': '10am - 6pm', 'available': True}
]


@app.route('/updateSlotTimings', methods=['POST'])
def update_slot_timings():
    data = request.json
    agent_name = data.get('agentName')
    slot_timings = data.get('slotTimings')

    if not agent_name or not slot_timings:
        return jsonify({'error': 'Agent name and slot timings are required'}), 400

    for agent in agents:
        if agent['name'] == agent_name:
            agent['slot_timings'] = slot_timings
            return jsonify({'message': 'Slot timings updated successfully'}), 200

    return jsonify({'error': 'Agent not found'}), 404


@app.route('/markAgentUnavailable', methods=['POST'])
def mark_agent_unavailable():
    data = request.json
    agent_name = data.get('agentName')

    if not agent_name:
        return jsonify({'error': 'Agent name is required'}), 400

    for agent in agents:
        if agent['name'] == agent_name:
            agent['available'] = False
            print(f"Agent '{agent_name}' marked as unavailable")
            break
    else:
        return jsonify({'error': f'Agent "{agent_name}" not found'}), 404

    return jsonify({'message': f'Agent "{agent_name}" marked as unavailable successfully'}), 200


@app.route('/markAgentAvailable', methods=['POST'])
def mark_agent_available():
    data = request.json
    agent_name = data.get('agentName')

    if not agent_name:
        return jsonify({'error': 'Agent name is required'}), 400

    for agent in agents:
        if agent['name'] == agent_name:
            agent['available'] = True
            print(f"Agent '{agent_name}' marked as available")
            break
    else:
        return jsonify({'error': f'Agent "{agent_name}" not found'}), 404

    return jsonify({'message': f'Agent "{agent_name}" marked as available successfully'}), 200


@app.route('/agents', methods=['GET'])
def get_agents():
    print("Request received for /agents route")
    print("List of Agents:")
    for agent in agents:
        print(f"Name: {agent['name']}, Slot Timings: {agent['slot_timings']}, Available: {'Yes' if agent['available'] else 'No'}")
    return jsonify(agents)


if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import requests
#
# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
#
# # GitHub repository URL and file path
# REPO_URL = 'https://github.hpe.com/gaurav-shukla/case-allocation.github.io/blob/main/'
# AGENT_DATA_FILE = 'agents.json'
#
# # Sample agent data (replace this with your actual agent data)
# agents = []
#
#
# def fetch_agents_from_github():
#     global agents
#     response = requests.get(REPO_URL + AGENT_DATA_FILE)
#     if response.status_code == 200:
#         agents = response.json()
#
#
# @app.route('/updateSlotTimings', methods=['POST'])
# def update_slot_timings():
#     data = request.json
#     agent_name = data.get('agentName')
#     slot_timings = data.get('slotTimings')
#
#     if not agent_name or not slot_timings:
#         return jsonify({'error': 'Agent name and slot timings are required'}), 400
#
#     for agent in agents:
#         if agent['name'] == agent_name:
#             agent['slot_timings'] = slot_timings
#             update_agents_file()
#             return jsonify({'message': 'Slot timings updated successfully'}), 200
#
#     return jsonify({'error': 'Agent not found'}), 404
#
#
# @app.route('/markAgentUnavailable', methods=['POST'])
# def mark_agent_unavailable():
#     data = request.json
#     agent_name = data.get('agentName')
#
#     if not agent_name:
#         return jsonify({'error': 'Agent name is required'}), 400
#
#     for agent in agents:
#         if agent['name'] == agent_name:
#             agent['available'] = False
#             update_agents_file()
#             return jsonify({'message': f'Agent "{agent_name}" marked as unavailable successfully'}), 200
#
#     return jsonify({'error': f'Agent "{agent_name}" not found'}), 404
#
#
# @app.route('/markAgentAvailable', methods=['POST'])
# def mark_agent_available():
#     data = request.json
#     agent_name = data.get('agentName')
#
#     if not agent_name:
#         return jsonify({'error': 'Agent name is required'}), 400
#
#     for agent in agents:
#         if agent['name'] == agent_name:
#             agent['available'] = True
#             update_agents_file()
#             return jsonify({'message': f'Agent "{agent_name}" marked as available successfully'}), 200
#
#     return jsonify({'error': f'Agent "{agent_name}" not found'}), 404
#
#
# @app.route('/agents', methods=['GET'])
# def get_agents():
#     fetch_agents_from_github()
#     return jsonify(agents)
#
#
# def update_agents_file():
#     response = requests.put(REPO_URL + AGENT_DATA_FILE, json=agents)
#     if response.status_code != 200:
#         print('Failed to update agents data file on GitHub')
#
#
# if __name__ == '__main__':
#     fetch_agents_from_github()  # Fetch initial data on startup
#     app.run(debug=True)
