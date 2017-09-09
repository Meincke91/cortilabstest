from config import queue_name
from AmazonSQS import AmazonSQS
from FileReader import FileReader

class SimpleMessageApplication():
	def __init__(self):
		self.amazonSQS = AmazonSQS(queue_name)
		self.fr = FileReader()
		
	# send one message to queue and consume it	
	def simple_message_test(self):
		
		self.amazonSQS.message_sender("test1")
		messages = self.amazonSQS.message_consumer()

		for message in messages:
			print(message.body)

	def general_message_test(self):
		
		# load the test data from data_one
		test_data = self.fr.read_file('resources/data_one.txt')

		# for every line in test data, add to SQS queue
		for element in test_data:
			print("sending message: '%s'" % (element))
			self.amazonSQS.message_sender(element)
		
		# consume message from queue
		retrieved_messages = self.amazonSQS.message_consumer()
		
		# continue to consume messages from queue until empty
		while not retrieved_messages == []:
			for message in retrieved_messages:
				print("receiving message: '%s'" % (message))
				self.fr.append_to_file('resources/retrieved_messages.txt', message)

			retrieved_messages = self.amazonSQS.message_consumer()
		

if __name__ == "__main__":
	sma = SimpleMessageApplication()
	
	sma.general_message_test()
	
