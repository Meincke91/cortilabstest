import boto3

class AmazonSQS:
	# Initialize the object with a queue name from the AWS SQS 
	def __init__(self, queue_name):
		self.queue_name = queue_name

	# Send a message to the SQS client
	def message_sender(self, message):
		# define a resource from the session
		sqs = boto3.resource('sqs')

		# Get the SQS. queue 
		queue = sqs.get_queue_by_name(QueueName=self.queue_name)

		# Send a message to the SQS server
		response = queue.send_message(MessageBody=str(message))

		return response

	# Fetch all messages from SQS client
	def message_receiver(self):
		# define a resource from the session
		sqs = boto3.resource('sqs')

		# Get the SQS. queue 
		queue = sqs.get_queue_by_name(QueueName=self.queue_name)

		# Receive all messages in the queue
		messages = queue.receive_messages()

		return messages

	# Receive all messages and delete them from the SQS client
	def message_consumer(self):
		sqs = boto3.resource('sqs')

		# Get the SQS. queue 
		queue = sqs.get_queue_by_name(QueueName=self.queue_name)
		messages = []

		for message in queue.receive_messages():
			messages.append(message.body)
			message.delete()

		return messages