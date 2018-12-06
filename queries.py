def build(headers):
    sql_string = '''SELECT body,author,score,subreddit FROM [fh-bigquery:reddit_comments.2017_04] '''
    if headers['min_score']:
        sql_string += 'WHERE score>' + str(headers['min_score']) + ' '
    if headers['ignore_empties']:
        sql_string += 'AND author != \"[deleted]\" '
    i = 0
    if headers['ignore_http']:
        sql_string += 'AND body not like \'%http%\' '

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