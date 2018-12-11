def build(headers):
    sql_string = '''SELECT body,author,score,subreddit,link_id,parent_id FROM [fh-bigquery:reddit_comments.2017_04] WHERE author != \"[deleted]\" AND '''
    print(headers)
    if headers['min_score'] is not None:
        sql_string += 'score>' + str(headers['min_score']) + ' '
    i = 0
    if headers['subreddit'] is not None:
        for sub in headers['subreddit'].split():
            if i > 0:
                sql_string += 'OR subreddit=\'' + sub + '\' '
                continue
            sql_string += 'AND (subreddit=\'' + sub  + '\' '
            i+=1
        sql_string += ') '
    if headers['total_amount']:
        sql_string += 'LIMIT ' + str(headers['total_amount'])
    else: 
        sql_string += 'LIMIT 100'
    print(sql_string)
    return sql_string