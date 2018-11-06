import bigquery
import time

import auth as b
import queries as q


def get_columns():
    columns = [{
    'Header': 'User',
    'accessor': 'author',
    'maxWidth': 120
    }, {
    'Header': 'Body',
    'accessor': 'body',
    'minWidth': 700
    }, {
    'Header': 'Vote',
    'accessor': 'score',
    'maxWidth': 70
    },]
    return columns

class Data:
    def __init__(self):
        email = b.client_email
        project = b.project_id
        key = b.credentials
        print('connecting to server...')
        self.client = bigquery.client.get_client(project_id = project, service_account=email, private_key_file=key, readonly="true")

    def ping_query(self):
        # sends query to BQ
        query = q.subTest
        print('sending ping...')
        job, result = self.client.query(query, timeout=10)
        complete = False
        # checks if query is complete after 10 secs
        while not complete:
            try:
                complete, progress = self.client.check_job(job)
            except:
                print('Download incomplete. Timeout for 10 more secs...')
                time.sleep(10)
            else:
                complete = True

        print ("Progress:", progress, "elements")
        if complete: 
            print("query request complete!")
        return result